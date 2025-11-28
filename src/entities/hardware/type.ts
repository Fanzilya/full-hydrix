export interface EquipmentCreateInterface {
    id?: number,
    name: string,
    img: string,
    category: string,
    model: string,
    supplier: string,
    manufacturer: string,
    position: string,
}

export interface CreateHardwareInterface {
    Name: string,
    Category: string,
    DeveloperName: string,
    SupplierName: string,
    PhotoName: string,
    Position: string,
    OpcDescription: string,
    ControlBlockId: number,
}

export interface CahrCreateDTO {
    HardwareId: number,
    Name: string,
    Value: string,
}


export interface HardwareInterface {
    id: number,
    name: string,
    category: string,
    controlBlockId: number,
    developerName: string,
    opcDescription: string,
    photoName: string,
    position: string,
    supplierName: string,
    controlBlock: ControlBlockInterface
}


export interface ControlBlockInterface {
    id: number,
    name: string,
    plcIpAdress: string,
}









