import instance from "@/core/network/api"
import { UserRoutes } from "@/core/network/api-routes"

export const updateUser = (data: updateUserData) => {
    return instance.put(UserRoutes.Update, data, { params: { id: data.id } })
}

type updateUserData = {

    id: number,
    firstName: string,
    lastName: string,
    patronymic: string,
    email: string,
    phoneNumber: string,
    adress: string | null
}