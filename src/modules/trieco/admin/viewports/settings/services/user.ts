import instance from "@/core/network/api";
import { UserRoutes } from "@/core/network/api-routes";
import { User } from "@/core/network/models";

export const updateUser = (data: User) => {
    return instance.put(UserRoutes.Update, data, {params: {id: data.id}})
}



