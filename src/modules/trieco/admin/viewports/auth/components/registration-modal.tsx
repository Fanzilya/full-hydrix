import { getFNSData } from "@/core/network/fns/fns";
import { Button, Input, Modal } from "@/core/UIKit"
import { Icon } from "@/core/UIKit/icon"
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { registrationModel } from "../model/register-model";
import { Password } from "@/core/UIKit/password-input";

type Props = {
    show: boolean;
    setShow: (value: boolean) => void
}

export const RegistrationModal = observer(({ show, setShow }: Props) => {
    const {
        handleEnter, changeINN, model, canSave,
        changeEmail, changeFirstName, changeLastName,
        changePassword, changePatronymic, changePhone,
        changeRepeatPassword, isPasswordCorrect, save
    } = registrationModel;
    return (
        <Modal setShow={setShow} show={show} title="Регистрация" wrapperClass="">
            <div className="">
                {/* <div className="bg-[#a76d374a] px-2 py-4 flex flex-row gap-3 rounded-md">
                    <Icon systemName="info" />
                    <span className="text-[#222121] text-[13px] font-semibold">Организация не существует, необходимо скорректировать форму регистрации</span>
                </div> */}
                <div className="mt-2">
                    <div>
                        <span className="font-bold text-[16px]">Инфромация об организации</span>
                        <div className="flex flex-row gap-8 mt-3">
                            <div className="w-full flex flex-row items-center">
                                <Input
                                    value={model.inn}
                                    onEnter={async () => { handleEnter() }}
                                    headerText="ИНН"
                                    onChange={changeINN}
                                    wrapperClass="w-full"
                                    lengthOptions={{ maxLength: 10, minLength: 0 }}
                                    class='rounded-[10px] pl-[14px]' />
                                <Button
                                    disabled={model.inn.length != 10}
                                    children="Заполнить"
                                    onClick={async () => { handleEnter() }}
                                    class="!text-white bg-[#4A85F6] font-semibold mt-4 px-2 ml-2" />
                            </div>
                            <Input
                                disabled
                                value={model.ogrn}
                                headerText="ОГРН"
                                wrapperClass="w-full"
                                class='disabled:bg-[#eee] rounded-[10px] pl-[14px]' />

                        </div>
                        <div className="flex flex-row gap-8 mt-3">
                            <Input
                                value={model.companyName}
                                disabled
                                headerText="Наинменование организации"
                                wrapperClass="w-full"
                                class='disabled:bg-[#eee] rounded-[10px] pl-[14px]' />
                        </div>
                        <div className="flex flex-row gap-8 mt-3">
                            <Input
                                value={model.adress}
                                disabled
                                headerText="Адрес организации"
                                wrapperClass="w-full"
                                class='disabled:bg-[#eee] rounded-[10px] pl-[14px]' />
                            <Input
                                value={model.shortName}
                                disabled
                                headerText="Сокращенное наименование"
                                wrapperClass="w-full"
                                class='disabled:bg-[#eee] rounded-[10px] pl-[14px]' />
                        </div>
                        <div className="flex flex-row gap-8 mt-3">
                            <Input
                                value={model.kpp}
                                disabled
                                headerText="КПП"
                                wrapperClass="w-full"
                                class='disabled:bg-[#eee] rounded-[10px] pl-[14px]' />
                            <Input
                                disabled
                                value={model.directorName}
                                headerText="ФИО Руководителя"
                                wrapperClass="w-full"
                                class='disabled:bg-[#eee] rounded-[10px] pl-[14px]' />
                        </div>
                    </div>
                    <div className="mt-5">
                        <span className="font-bold text-[16px]">Основная информация</span>
                        <div className="flex flex-row gap-8 mt-2">
                            <Input
                                value={model.lastName}
                                onChange={changeLastName}
                                headerText="Фамилия"
                                wrapperClass="w-full"
                                class='rounded-[10px] pl-[14px]' />
                            <Input
                                value={model.firstName}
                                onChange={changeFirstName}
                                headerText="Имя"
                                wrapperClass="w-full"
                                class='rounded-[10px] pl-[14px]' />
                            <Input
                                value={model.patronymic}
                                onChange={changePatronymic}
                                headerText="Отчество"
                                wrapperClass="w-full"
                                class='rounded-[10px] pl-[14px]' />
                        </div>
                        <div className="flex flex-row gap-8 mt-2">
                            <Input
                                value={model.email}
                                onChange={changeEmail}
                                headerText="E-mail"
                                type="email"
                                wrapperClass="w-full"
                                class='rounded-[10px] pl-[14px]' />
                            <Input
                                value={model.phoneNumber}
                                onChange={changePhone}
                                headerText="Телефон"
                                type="phone"
                                wrapperClass="w-full"
                                class='rounded-[10px] pl-[14px]' />
                        </div>
                        <div className="flex flex-row gap-8 mt-2">
                            <Password
                                value={model.password}
                                onChange={changePassword}
                                headerText="Пароль"
                                wrapperClass="w-full"
                                class='rounded-[10px] pl-[14px]' />
                            <Password
                                value={model.repeatPassword}
                                onChange={changeRepeatPassword}
                                underlineText={!isPasswordCorrect() ? "Пароли должны совпадать" : undefined}
                                headerText="Повторите пароль"
                                wrapperClass="w-full"
                                class='rounded-[10px] pl-[14px]' />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-8 gap-5">
                    <Button disabled={!canSave} children="Регистрация" onClick={async () => { await save(); setShow(false) }} class="!text-white bg-[#4A85F6] px-4 py-2 font-semibold" />
                    <Button children="Отмена" onClick={() => setShow(false)} class="!text-[#4A85F6] font-semibold border-2 border-[#4A85F6] px-7 py-2" />
                </div>
            </div>
        </Modal>
    )
})