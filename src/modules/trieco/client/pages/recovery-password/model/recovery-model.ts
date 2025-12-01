import { recoveryPassword } from "@/core/network/user/user";
import { ValidationResult } from "@/core/UIKit";
import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";

export class RecoveryPasswordModel {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private _email: string = "";
  private _isError: boolean = false;

  get email() {
    return this._email;
  }

  get canSend() {
    return this._email != "";
  }
  get isError() {
    return this._isError;
  }
  changeEmail(value: string, valid?: ValidationResult) {
    this._email = value;
    this._isError = !valid!.success;
  }

  recovery() {
    recoveryPassword({
      Email: this._email,
    })
      .then((x) => {
        toast("Новый пароль отправлен вам на почту", {
          progressStyle: { background: "green" },
        });
      })
      .catch(() => {
        toast("Неправильный почтовый адрес", {
          progressStyle: { background: "red" },
        });
      });
  }
}

const recoveryModel = new RecoveryPasswordModel();
export default recoveryModel;
