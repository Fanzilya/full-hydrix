import { Sewer } from "@/entities/sewer/type";
import { makeAutoObservable, runInAction } from "mobx";

export class SewerListModel {
  model: Sewer[] = [];

  tanks: number[] = [];
  showInfo: boolean = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true }
    );
  }



  get list() {
    if (this.tanks.length !== 0) {
      return this.model.filter(item => this.tanks.includes(item.tankVolume))
    }

    return this.model;
  }

  pushSewer(sewer: Sewer) {
    runInAction(() => {
      this.model.push({ ...sewer });
    });
  }

  setShowInfo(value: boolean) {
    this.showInfo = value
  }

  public pushTank(value: number, checked: boolean) {
    checked
      ? this.tanks.push(value)
      : (this.tanks = this.tanks.filter((item) => item !== value));
  }

  public async loadSewersByCompany(companyId: number) {
    // getByWaterCompany({ WaterCompanyId: companyId }).then((x) => {
    //   this.model = x.data;
    // });
  }

  public async loadAllSewers() {
    // getAllSewers().then((x: Sewer) => {
    //   this.model = x.data;
    // });
  }

  async init(companyId: number) {
    companyId ? await this.loadSewersByCompany(companyId) : await this.loadAllSewers();

    for (let i = 0; i < 20; i++) {
      this.model[i] = {
        id: i,
        sewerNumberPlate: "string",
        sewerCarModel: "string",
        sewerBusinessType: "string",
        tankVolume: i * 2,
        companyId: i,
        companyName: "string",
        email: "string",
        phoneNumber: "string",
        rating: i,
        userId: i,
        firstName: "string" + i,
        lastName: "string" + i,
        patronymic: "string" + i
      }
    }

  }
}

const sewerListModel = new SewerListModel();
export default sewerListModel;
