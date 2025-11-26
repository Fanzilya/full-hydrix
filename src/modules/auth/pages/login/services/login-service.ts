// import instance from "@/api/instances";

// export const authAdmin = (params: AuthEntity) => {
//     return instance.get(UserRoutes.Authorization, { params })
// }

export type LoginType = {
    email: string;
    password: string;
}

// export type AuthResponse = {
//     id: number;
// }