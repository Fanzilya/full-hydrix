import { User } from "@/core/network/models";
import adminModel from "@/modules/admin/kernel/model/admin-model";
import { makeAutoObservable, toJS } from "mobx";
import { updateUser } from "../services/user";
import { ValidationResult } from "@/core/UIKit";
import { emailApprove, emailConfirm } from "@/core/network/user/user";
import { toast } from "react-toastify";

export class ProfileModel {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private _isError: boolean = false;
  private _currentUser: User | null = null;

  private _sendedCode: string = "";
  private _code: string = "";

  get currentUser() {
    return this._currentUser;
  }

  get isError() {
    return this._isError;
  }

  get code() {
    return this._code;
  }

  init(user: User) {
    this._currentUser = { ...user };
  }

  changeFirstName(value: string) {
    this._currentUser!.firstName = value;
  }

  changeLastName(value: string) {
    this._currentUser!.lastName = value;
  }

  changeMiddleName(value: string) {
    this._currentUser!.patronymic = value;
  }

  changeEmail(value: string, valid?: ValidationResult) {
    this._currentUser!.email = value;
    this._isError = !valid!.success;
  }

  changePhone(value: string) {
    this._currentUser!.phoneNumber = value;
  }

  isChanged(user: User) {
    return (
      user.firstName != this.currentUser?.firstName ||
      user.lastName != this.currentUser?.lastName ||
      user.patronymic != this.currentUser?.patronymic ||
      user.login != this.currentUser?.login ||
      user.phoneNumber != this.currentUser?.phoneNumber ||
      user.email != this.currentUser?.email
    );
  }

  changeCode(value: string) {
    this._code = value;
  }

  async sendConfirmCode() {
    const response = await emailConfirm({
      EmailAddress: this.currentUser?.email || "",
      UserId: this.currentUser?.id || 0,
    });

    this._sendedCode = response.data.code;
  }

  async confirmCode(onConfirm?: () => void) {
    if (this._code != this._sendedCode) {
      toast("Код подверждения неверный", {
        progressStyle: { background: "red" },
      });
      return;
    }

    const response = await emailApprove({ UserId: this.currentUser?.id || 0 });
    if (response.status === 200) {
      this._currentUser!.isEmailApproved = true;
    }
    onConfirm && onConfirm();
  }

  updateUser() {
    updateUser(this.currentUser!).then(() => {
      adminModel.setUser({ ...this.currentUser });
    });
  }
}

const profileModel = new ProfileModel();
export default profileModel;
