import instance from "@/core/network/api"
import { PlantsRoutes } from "@/core/network/api-routes"

export const getAllPlants = (params: GetCompanyPlantsRequest) => {
    return instance.get(PlantsRoutes.GetByCompany, {params})
}

export const createPlant = (data: Plant) => {
    return instance.post(PlantsRoutes.Create, data)
}

export type GetCompanyPlantsRequest = {
    companyId: number
}

export type Plant = {
    adress: string,
    tariff: string,
    companyId: number
}