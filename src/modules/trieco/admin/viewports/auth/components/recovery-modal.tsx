import { Button, Input, Modal } from "@/core/UIKit";
import { observer } from "mobx-react-lite";
import recoveryPasswordModel from "../model/recovery-password-model";

type Props = {
    show: boolean;
    setShow: (value: boolean) => void
}

export const RecoveryModal = observer(({ show, setShow }: Props) => {
    const { changeEmail, email, isRecovery, send } = recoveryPasswordModel;

    return (
        <Modal setShow={setShow} show={show} title="Восстановление пароля" className="w-[400px]">
            {
                !isRecovery ?
                    <div className="w-full flex flex-col">
                        <span className='text-center font-bold text-[22px]'>Забыли пароль?</span>
                        <span className='text-center font-semibold text-[16px]'>Введите адрес электронной почты, с которым вы зарегистрированы.</span>
                        <Input
                            onChange={(v) => changeEmail(v)}
                            value={email}
                            type='email'
                            headerText='E-mail'
                            isRequired
                            placeholder=''
                            class='h-[56px] rounded-[10px] pl-[14px]' />
                        <Button
                            disabled={email == ""}
                            onClick={send}
                            children="Восстановить пароль"
                            class='text-white font-bold flex items-center justify-center rounded-xl bg-[#4A85F6] py-4 mt-3' />
                        <Button onClick={() => { setShow(false) }}
                            children="Вернуться"
                            class='!text-[#4A85F6] font-bold flex items-center justify-center rounded-xl border-[#4A85F6] border-[3px] py-4 mt-2' />

                    </div> :
                    <div className="w-full flex flex-col">
                        <span className='text-center font-bold text-[22px]'>Пароль восстановлен</span>
                        <span className='text-center font-semibold text-[16px]'>На почту был отправлен новый пароль</span>
                        <Button onClick={() => { setShow(false) }}
                            children="Вернуться"
                            class='!text-[#4A85F6] font-bold flex items-center justify-center rounded-xl border-[#4A85F6] border-[3px] py-4 mt-4' />

                    </div>
            }

        </Modal>
    )
})