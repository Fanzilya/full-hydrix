import { Operator } from "@/entities/operator/type";
import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import operatorModel from "./operator-model";

export class OperatorListModel {

  model: Operator[] = [];
  showInfo: boolean = false;
  showModalChange: boolean = false;
  operator: Operator | null = null;


  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get list() {
    return this.model
  }

  setShowInfo(value: boolean, row: Operator | null) {
    this.showInfo = value;
    this.operator = row;
  }
  setShowModalChange(value: boolean, row: Operator | null) {
    this.showModalChange = value;
    this.operator = row;
  }

  pushOperator(operator: Operator) {
    this.model.push(operator);
    this.model = this.model.slice();
  }

  updateOperator(operator: Operator) {
    this.setShowModalChange(true, operator);
    operatorModel.setOperator(operator);
  }


  async init(waterCompanyId: number) {
    // getWaterCompanyOperators({ WaterCompanyId: waterCompanyId })
    //   .then((x) => {
    //     this.model = x.data;
    //   })
    //   .catch(() => {
    //     toast("Операторов не найдено", {
    //       progressStyle: { background: "red" },
    //     });
    //   });

    for (let i = 0; i < 10; i++) {
      this.model[i] = {
        userId: i,
        firstName: "string" + i,
        lastName: "string" + i,
        patronymic: "string" + i,
        phone: "string" + i,
        email: "string" + i,
        login: "string" + i,
        roleName: i % 3 === 0 ? "WaterCompanyOperator" : (i % 2 == 0 ? "TreatmentPlantOperator" : "WaterCompanyAdmin"),
        isRevoked: true,
        waterCompanyId: i,
        plantId: i,
        workplace: "string" + i
      }
    }
  }
}

const operatorListModel = new OperatorListModel();
export default operatorListModel;
