import instance from "@/app/api/instances";
import { UserRoutes } from "@/app/cores/core-gis/network/api-routes";

export const authAdmin = (params: AuthEntity) => {
    return instance.get(UserRoutes.Authorization, { params })
}

export type AuthEntity = {
    username: string;
    password: string;
}


export type AuthResponse = {
    id: number;
}