import { AuthForm } from "../../components/auth-form"

export const AuthView = () => {
    return (
        // Данный компонент не используется. Вся регистрация происходит 
        // в моделе client в компонентах папки auth.
        // При попытке зайти на данную страницу, происходит редирект в клиентскую авторизацию
        <AuthForm />
    )
}