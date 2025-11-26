import { makeAutoObservable } from "mobx";
import { ControlBlockAllType, createOrderByPoint } from "../service/table-scheme-service";

class TableSchemeModel {

    model: ControlBlockAllType[] = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    get list() {
        return this.model;
    }


    async getInfoSensor() {
        // return new Promise((resolve) => {
        // setTimeout(async () => {
        await createOrderByPoint()
            .then((data) => {
                console.log(data.data)
                // resolve(parseFloat());
            })

        // }, 3000);
        // });
    }

    // SensorValueCell = () => {

    //     let infoCount;

    //     this.getInfoSensor()
    //         .then((result: any) => {
    //             infoCount = result;
    //         });

    //     return infoCount
    // };

}
export const tableSchemeModel = new TableSchemeModel()