import { Characteristics, Control, Hardware } from "@/app/api/api-router"
import instance from "@/app/api/instances"
import { CharacteristicsCreateManyInterface, CreateHardwareInterface } from "./type"
import { ControlType, ControlTypeCreate, ControlTypeCreateMany } from "@/modules/dispatcher/pages/equipment-create/components/control/type"


export const getAllHardware = () => {
    return instance.get(Hardware.all)
}

export const getInfoHardware = (params: { id: number }) => {
    return instance.get(Hardware.one, { params })
}

export const createHardware = (params: CreateHardwareInterface) => {
    return instance.post(Hardware.create, params)
}

// Характеристика
export const createCharacteristic = () => {
    return instance.post(Characteristics.createOnde)
}
export const manyCharacteristic = (params: CharacteristicsCreateManyInterface) => {
    return instance.post(Characteristics.createMany, params)
}
export const getCharacteristicAll = (params: { id: number }) => {
    return instance.get(Characteristics.all, { params })
}


// Управление
export const createManyInfo = (params: ControlTypeCreateMany) => {
    return instance.post(Control.createManyInfo, params);
}
export const createOndeInfo = (params: ControlTypeCreate) => {
    return instance.post(Control.createOndeInfo, params);
}
export const createManyCommand = (params: ControlTypeCreateMany) => {
    return instance.post(Control.createManyCommand, params);
}
export const createOndeCommand = (params: ControlTypeCreate) => {
    return instance.post(Control.createOndeCommand, params);
}

export const getCommandAll = (params: { id: number }) => {
    return instance.get(Control.all, { params })
}
