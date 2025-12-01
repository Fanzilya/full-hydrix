import { CharacteristicsCreateInterface, EquipmentCreateInterface } from "@/entities/hardware/type";
import { makeAutoObservable } from "mobx";
import { ChangeEvent } from "react";
import { Characteristic } from "../components/characteristic/type";
import { createHardware, createManyCommand, createManyInfo, createOndeInfo, getAllHardware, manyCharacteristic } from "@/entities/hardware/api";
import { toast } from "react-toastify";
import { ControlType, ControlTypeCreate } from "../components/control/type";
import { isValid } from "date-fns";

class EquipmentCreateModel {

    imgPreview: string = "";
    saveIMage: File | null = null;
    model: EquipmentCreateInterface = {
        name: "",
        img: "",
        category: "",
        model: "",
        supplier: "",
        manufacturer: "",
        position: "",
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setName(value: string) {
        this.model.name = value;
    }

    setImg(e: ChangeEvent<HTMLInputElement>) {
        this.saveIMage = e.target.files && e.target?.files[0]
        this.imgPreview = URL.createObjectURL(this.saveIMage);
    }

    setCategory(value: string) {
        this.model.category = value;
    }
    setModel(value: string) {
        this.model.model = value;
    }
    setSupplier(value: string) {
        this.model.supplier = value;
    }
    setManufacturer(value: string) {
        this.model.manufacturer = value;
    }
    setPosition(value: string) {
        this.model.position = value;
    }

    clear() {
        this.model = {
            name: "",
            img: "",
            category: "",
            model: "",
            supplier: "",
            manufacturer: "",
            position: "",
        };
        this.saveIMage = null;
        this.imgPreview = "";
    }

    async create() {
        const formData = new FormData();
        formData.append("image", this.saveIMage);

        const response = await fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        this.model.img = result.url;

        await createHardware({
            name: this.model.name,
            category: this.model.category,
            developerName: this.model.manufacturer,
            supplierName: this.model.supplier,
            photoName: this.model.img,
            position: this.model.position,
            opcDescription: this.model.model,
            model: this.model.model,
            controlBlockId: 1
        }).then((res) => {
            this.model.id = res.data
            toast.success("Оборудование создано", { progressStyle: { background: "green" } })
        })
    }

    async createCharacteristic(characteristics: Characteristic[]) {
        let data: CharacteristicsCreateInterface[] = [];

        if (this.model.id == 0 || this.model.id == null) return

        for (let i = 0; i < characteristics.length; i++) {
            data[i] = {
                hardwareId: this.model.id,
                name: characteristics[i].name,
                value: characteristics[i].value
            };
        }
        await manyCharacteristic({
            hardwareId: this.model.id,
            characteristics: data
        }).then((resa) => {
            toast.success("Характеристики добавлены", { progressStyle: { background: "green" } })
            console.log(resa.data)
        })
    }

    async createControl(controls: ControlType[]) {
        let dataInfo: ControlTypeCreate[] = [];
        let dataCommand: ControlTypeCreate[] = [];

        if (this.model.id == 0 || this.model.id == null) return

        for (let i = 0; i < controls.length; i++) {
            if (controls[i].isInfo == true) {
                dataInfo[i] = {
                    hardwareId: this.model.id,
                    name: controls[i].name,
                    mesurement: controls[i].mesurement,
                    plcNodeid: controls[i].plcNodeid,
                    isValue: controls[i].isValue,
                };
            } else {
                dataCommand[i] = {
                    hardwareId: this.model.id,
                    name: controls[i].name,
                    mesurement: controls[i].mesurement,
                    plcNodeid: controls[i].plcNodeid,
                    isValue: controls[i].isValue,
                }
            }
        }
        await createManyInfo({
            hardwareId: this.model.id,
            nodes: dataInfo
        }).then((resa) => {
            console.log(resa.data)
        })

        await createManyCommand({
            hardwareId: this.model.id,
            nodes: dataCommand
        }).then((resa) => {
            console.log(resa.data)
            toast.success("Управления добавлены", { progressStyle: { background: "green" } })
        })
    }

    // async createService(characteristics: Characteristic[]) {
    //     let data: CahrCreateDTO[] = [];

    //     for (let i = 0; i < characteristics.length; i++) {
    //         data[i] = {
    //             HardwareId: 1,
    //             Name: characteristics[i].name,
    //             Value: characteristics[i].value
    //         };
    //     }

    //     console.log(data)

    //     await manyCharacteristic(data).then((resa) => {
    //         console.log(resa.data)
    //     })

    //     console.log({ model: this.model, characteristics: characteristics })
    // }

}

export const equipmentCreateModel = new EquipmentCreateModel();