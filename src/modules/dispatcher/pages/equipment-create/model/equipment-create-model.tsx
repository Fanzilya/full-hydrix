import { CahrCreateDTO, EquipmentCreateInterface } from "@/entities/hardware/type";
import { makeAutoObservable } from "mobx";
import { ChangeEvent } from "react";
import { Characteristic } from "../components/characteristic/type";
import { createHardware, getAllHardware, manyCharacteristic } from "@/entities/hardware/api";
import { toast } from "react-toastify";

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

    async create(characteristics: Characteristic[]) {
        const formData = new FormData();
        formData.append("image", this.saveIMage);

        const response = await fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        this.model.img = result.url;

        // await getAllHardware().then((res) => {
        //     console.log(res.data)
        // })

        await createHardware({
            Name: this.model.name,
            Category: this.model.category,
            DeveloperName: this.model.manufacturer,
            SupplierName: this.model.supplier,
            PhotoName: this.model.img,
            Position: this.model.position,
            OpcDescription: this.model.model,
            ControlBlockId: 1,
        }).then((res) => {
            toast.success("Оборудование создано", { progressStyle: { background: "green" } })
            this.clear();
        })


        // let data: CahrCreateDTO[] = [];

        // for (let i = 0; i < characteristics.length; i++) {
        //     data[i] = {
        //         HardwareId: 1,
        //         Name: characteristics[i].name,
        //         Value: characteristics[i].value
        //     };
        // }

        // console.log(data)

        // await manyCharacteristic(data).then((resa) => {
        //     console.log(resa.data)
        // })

        // console.log({ model: this.model, characteristics: characteristics })
    }
}

export const equipmentCreateModel = new EquipmentCreateModel();