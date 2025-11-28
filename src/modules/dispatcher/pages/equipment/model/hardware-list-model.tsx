import { getAllHardware } from "@/entities/hardware/api";
import { HardwareInterface } from "@/entities/hardware/type";
import { makeAutoObservable } from "mobx";

class HardwareListModel {
    model: HardwareInterface[] = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    get list() {
        return this.model;
    }

    async init() {
        await getAllHardware().then((res) => {
            console.log(res.data)
            this.model = res.data
        })
    }
}

export const hardwareListModel = new HardwareListModel()