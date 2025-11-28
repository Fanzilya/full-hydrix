import { Characteristics, Hardware } from "@/app/api/api-router"
import instance from "@/app/api/instances"
import { CahrCreateDTO, CreateHardwareInterface } from "./type"


export const getAllHardware = () => {
    return instance.get(Hardware.all)
}

export const getInfoHardware = () => {
    return instance.get(Hardware.info)
}

export const createHardware = (params: CreateHardwareInterface) => {
    return instance.post(Hardware.create, params)
}

export const createCharacteristic = () => {
    return instance.post(Characteristics.createOnde)
}
export const manyCharacteristic = (params: CahrCreateDTO[]) => {
    return instance.post(Characteristics.createMany, params)
}