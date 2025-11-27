import { createContext, useContext, useEffect, ReactNode } from "react";
import { userModel, UserModel } from "./user";
import { User } from "./type";

interface AuthContextType {
    // Данные пользователя
    user: User | null;
    isLoading: boolean;
    error: string | null;
    isAuthenticated: boolean;

    // Методы
    setUser: (user: User) => void;
    updateUser: (updates: Partial<User>) => void;
    initUser: () => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    useEffect(() => {
        if (userModel.getToken()) {
            userModel.initUser();
        }
    }, []);

    const value: AuthContextType = {
        // Данные
        user: userModel.user,
        isLoading: userModel.isLoading,
        error: userModel.error,
        isAuthenticated: userModel.isAuthenticated,

        // Методы
        setUser: userModel.setUser,
        updateUser: userModel.updateUser,
        initUser: userModel.initUser,
        logout: userModel.logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};