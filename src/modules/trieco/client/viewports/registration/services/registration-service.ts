import instance from "@/core/network/api";
import { UserRoutes } from "@/core/network/api-routes";

export const registrate = (params: RegistrationRequest) => {
    return instance.post(UserRoutes.Create, params)
}

export type RegistrationRequest = {
    email: string,
    password: string,
    repeatPassword: string,
    login: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    adress: string,
    roleId: number,
    companyName: string
}