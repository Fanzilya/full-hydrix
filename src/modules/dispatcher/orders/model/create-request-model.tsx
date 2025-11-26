import { makeAutoObservable } from "mobx";

class CreateRequestModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
}