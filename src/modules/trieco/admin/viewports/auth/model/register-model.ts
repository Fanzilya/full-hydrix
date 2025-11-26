import { makeAutoObservable } from "mobx";
import {
  CompanyRegistrateRequest,
  createCompany,
} from "../services/authService";
import { getFNSData } from "@/core/network/fns/fns";
import { toast } from "react-toastify";
import { emailConfirm } from "@/core/network/user/user";

class RegistrationModel {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this._model = {
      adress: "",
      companyName: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      phoneNumber: "",
      companyTypeId: 1,
      directorName: "",
      inn: "",
      juridicalAddress: "",
      kpp: "",
      ogrn: "",
      patronymic: "",
      shortName: "",
      repeatPassword: "",
    };
  }

  private _model: CompanyRegistrateRequest;

  get model() {
    return this._model;
  }

  changeINN(value: string) {
    if (isNaN(Number(value))) return;

    this._model.inn = value;
  }

  async handleEnter() {
    if (this._model.inn.length === 10) {
      const response = await getFNSData({ INN: this._model.inn });
      const data = response.data.items[0]["ЮЛ"];
      if (response.data.items.length === 0) {
        toast("Введите правильный ИНН", {
          progressStyle: { background: "red" },
        });
        return;
      }
      this._model.ogrn = data["ОГРН"];
      this._model.kpp = data["КПП"];
      this._model.companyName = data["НаимПолнЮЛ"];
      this._model.shortName = data["НаимСокрЮЛ"];
      this._model.directorName = data["Руководитель"]["ФИОПолн"];
      this._model.adress = data["Адрес"]["АдресПолн"];
      this._model.juridicalAddress = data["Адрес"]["АдресПолн"];
    } else {
      toast("Введите правильный ИНН", { progressStyle: { background: "red" } });
    }
  }

  changeFirstName(value: string) {
    this._model.firstName = value;
  }

  changeLastName(value: string) {
    this._model.lastName = value;
  }

  changePatronymic(value: string) {
    this._model.patronymic = value;
  }

  changeEmail(value: string) {
    this._model.email = value;
  }

  changePhone(value: string) {
    this._model.phoneNumber = value;
  }

  changePassword(value: string) {
    this._model.password = value;
  }

  changeRepeatPassword(value: string) {
    this._model.repeatPassword = value;
  }

  isPasswordCorrect() {
    return this._model.password === this._model.repeatPassword;
  }

  get canSave() {
    return (
      this._model.adress != "" &&
      this._model.companyName != "" &&
      this._model.directorName != "" &&
      this._model.email != "" &&
      this._model.firstName != "" &&
      this._model.inn != "" &&
      this._model.kpp != "" &&
      this._model.ogrn != "" &&
      this._model.shortName != "" &&
      this._model.juridicalAddress != "" &&
      this._model.password != "" &&
      this._model.repeatPassword != "" &&
      this._model.repeatPassword === this._model.password
    );
  }

  async save() {
    const response = await createCompany(this._model);

    if (response.status != 200) {
      toast("Не удалось создать компанию", {
        progressStyle: { background: "red" },
      });
      return;
    }
  }
}

export const registrationModel = new RegistrationModel();
