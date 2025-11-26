// !-----
import { makeAutoObservable } from "mobx";
import { authAdmin, AuthEntity } from "../services/authService";
import { Role } from "@/core/enums/role";
import { getUserCompany } from "@/core/network/user/user";
import { toast } from "react-toastify";
// !-----

export class AuthModel {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this._model = {
      username: "",
      password: "",
    };
  }

  private _model: AuthEntity;

  get model() {
    return this._model;
  }

  isError: boolean = false;

  public changeLogin(value: string) {
    this.isError = false;
    this._model.username = value;
  }

  public changePassword(value: string) {
    this.isError = false;
    this._model.password = value;
  }

  public login() {
    authAdmin(this._model)
      .then(async (x) => {
        try {
          const companyResponse = await getUserCompany({ UserId: x.data.id });
          window.localStorage.setItem("refresh-token", x.data["id"]);
          if (x.data["roleId"] === Role.CompanyOperator) {
            window.location.href = "/admin/sewers";
            return;
          }
          window.location.href = "/";
        } catch (error) {
          toast("Компания не найдена", {
            progressStyle: { background: "red" },
          });
          // window.location.href = '/admin/auth'
        }
      })
      .catch((x) => {
        if (x.status !== 200) {
          this.isError = true;
          return;
        }
      });
  }
}

const authModel = new AuthModel();
export default authModel;
