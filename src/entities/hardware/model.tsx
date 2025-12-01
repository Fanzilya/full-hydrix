import { getCharacteristicAll, getCommandAll, getInfoHardware } from "@/entities/hardware/api";
import { ModelHardwareOneInterface } from "@/entities/hardware/type";
import { Characteristic } from "@/modules/dispatcher/pages/equipment-create/components/characteristic/type";
import { ControlModelType } from "@/modules/dispatcher/pages/equipment-create/components/control/type";
import { makeAutoObservable } from "mobx";

class HardwareModel {

    model: ModelHardwareOneInterface = {
        id: 0,
        name: "",
        model: "",
        category: "",
        developerName: "",
        supplierName: "",
        photoName: "",
        position: "",
        opcDescription: "",
        controlBlockId: 0,
    };

    isLoading: boolean = false;

    сharacteristic: Characteristic[] = []
    commands: ControlModelType[] = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }


    async init(id: number) {
        await getInfoHardware({ id: id })
            .then((res) => {
                console.log(res.data)
                this.model = res.data
            })
            .finally(() => {
                this.isLoading = true
            })
    }

    async initCharacteristic(id: number) {
        await getCharacteristicAll({ id: id }).then((res) => {
            this.сharacteristic = res.data
            console.log(res.data)
        })
    }

    async initControl(id: number) {
        await getCommandAll({ id: id }).then((res) => {
            this.commands = res.data
            console.log(res.data)
        })
    }

}

export const hardwareModel = new HardwareModel()