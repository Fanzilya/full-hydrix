import instance from "@/app/api/instances"
import { PickupPointRoutes } from "@/app/cores/core-trieco/network/api-routes"

export const getAllPointsByUser = (params: GetAllPointRequest) => {
    return instance.get(PickupPointRoutes.GetByUser, { params })
}

export const createPoint = (data: Point) => {
    return instance.post(PickupPointRoutes.Create, data)
}

export const editPoint = (data: UpdatePointRequest) => {
    return instance.put(PickupPointRoutes.Update, data, { params: { "id": data.pointId } })
}

export type GetAllPointRequest = {
    userId: number,
}

export type UpdatePointRequest = {
    pointId: number,
    address: string,
    wasteVolume: number,
    latitude: number,
    longitude: number,
}

export type Point = {
    id: number,
    pointId: number,
    address: string,
    wasteVolume: number,
    userId: number,
    latitude: number,
    longitude: number,
}