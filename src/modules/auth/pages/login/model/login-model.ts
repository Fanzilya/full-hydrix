import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { LoginType } from "../services/login-service";
import { testEmail } from "@/shared/ui/Inputs/setting/input-valid-email";

class LoginModel {
    model: LoginType = { email: "", password: "" };
    validError: LoginType = { email: "", password: "" };

    isErrorStart: boolean = false;
    // isCapcha = false;
    // capchaCount = 0;
    isLoading = false;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setEmail(value: string) {
        if (this.isErrorStart) this.validEmail(value)
        this.model.email = value;
    }

    validEmail(value: string) {
        this.validError.email = value.length == 0 ? "Поле пустое" : testEmail(value).errorTxt;
        return Boolean(this.validError.email);
    }


    setPassword(value: string) {
        if (this.isErrorStart) this.validPassword(value);
        this.model.password = value;
    }

    validPassword(value: string) {
        this.validError.password = value.length == 0 ? "Поле пустое" : "";
        return Boolean(this.validError.password);
    }

    // setCapcha(value: boolean) {
    //     this.isCapcha = value;
    // }

    // setCapchaCount(value: number) {
    //     this.capchaCount = value;
    //     if (value >= 3) {
    //         this.setCapcha(true);
    //     } else {
    //         this.setCapcha(false);
    //     }
    // }

    // infoLink() {
    //     toast.info(
    //         `Уважаемый пользователь! 
    //   Данное приложение не требует установки. Используйте функции авторизации или регистрации, предусмотренные функционалом приложения.
    //   С информацией об эксплуатации приложения вы можете ознакомиться в соответствующем разделе.`,
    //         { progressStyle: { alignItems: "start", background: "blue" } }
    //     );
    // }

    get canSubmit() {
        const hasCredentials = Boolean(this.model.email?.trim()) && Boolean(this.model.password?.trim());
        return hasCredentials && !this.isLoading;
        // return hasCredentials && !this.isCapcha && !this.isLoading;
    }

    private incrementCapchaAttempts() {
        // this.setCapchaCount(this.capchaCount + 1);
    }

    async login() {

        window.location.href = "/menu-moduls";

        if (this.validEmail(this.model.email) && this.validPassword(this.model.password)) {
            this.isErrorStart = true;
            this.incrementCapchaAttempts();
            return;
        }

        // if (this.isCapcha) {
        //     toast.warn("Подтвердите, что вы не робот.");
        //     return;
        // }

        this.isLoading = true;
        this.isErrorStart = false;

        try {
            // TODO: реализовать сетевой запрос авторизации после подключения API.
            toast.info("Функция авторизации находится в разработке.");
        } catch (error) {
            this.incrementCapchaAttempts();
            toast.error("Не удалось выполнить авторизацию. Повторите попытку позже.");
        } finally {
            // setTimeout(() => {
            this.isLoading = false;
            // }, 5000);
        }
    }
}

export default new LoginModel();