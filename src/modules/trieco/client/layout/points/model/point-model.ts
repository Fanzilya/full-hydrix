import { makeAutoObservable } from "mobx";
import { getAllPointsByUser, Point } from "../service/point-service";

export class PointsModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    private _model: Point[] = [];

    public get model() {
        return this._model;
    }

    init(userId: number) {
        getAllPointsByUser({ userId }).then(x => {
            this._model = x.data
        })
    }
}

const pointsModel = new PointsModel();
export default pointsModel;