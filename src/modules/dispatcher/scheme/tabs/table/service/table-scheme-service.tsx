import instance from "@/app/api/instances";
import { intercept } from "mobx"

export type TableSchemeType = {
    id: number,
    name: string,
    node: string,
}




export type ControlBlockAllType = {
    id: number,
    name: string,
    opcDescription: string,
    controlBlockId: number,
    controlBlock: string,
}


export const createOrderByPoint = () => {
    return instance.get("/Hardware/all", {});
}
// export const getAllClientCompanies = () => {
//     return instance.get(ClientCompanyRoutes.GetAll)
// }