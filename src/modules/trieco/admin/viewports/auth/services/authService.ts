import instance from "@/core/network/api";
import { CompanyRoutes, UserRoutes } from "@/core/network/api-routes";

export const authAdmin = (params: AuthEntity) => { 
    return instance.get(UserRoutes.Authorization, {params})
}

export type AuthEntity = {
    username: string;
    password: string;
}

export type CompanyRegistrateRequest = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic: string;
    companyName: string;
    phoneNumber: string;
    ogrn: string;
    inn: string;
    adress: string;
    companyTypeId: number,
    juridicalAddress: string,
    directorName: string,
    kpp: string,
    shortName: string;
    repeatPassword: string;
}

export const createCompany = (data: CompanyRegistrateRequest) => {
    return instance.post(CompanyRoutes.Create, data)
}

export type AuthResponse = {
    id: number;
}