import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import { Input } from '@/shared/ui/Inputs/input-text';
import { Modal } from '@/shared/ui/modal/modal';
import { SwitchButton } from '@/shared/ui/switch-button';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { datainpt } from '../data/data';
import { Block } from '../components/block';

export const HardwareControlle = observer(() => {


    const [btnCount, setBtnCount] = useState<number>(0);
    const [value, setValue] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);

    const counter = [1, 2, 3, 4, 5, 6, 7];

    return (
        <>
            <Modal
                title="Подтвердить значение"
                wrapperId="wardhare"
                type="center"
                show={show}
                setShow={setShow}
                children={
                    <div className='py-3 px-6 h-[150px] flex items-center text-[24px] font-medium'>
                        Вы подтверждаете изменение значения
                    </div>
                }
                footerSlot={
                    <div className='flex justify-end gap-3 py-3 px-6'>
                        <Button class='px-3 py-2 bg-[var(--clr-accent)] text-white hover:opacity-50' onClick={() => setShow(false)}>Подтвердить</Button>
                        <Button class='px-3 py-2 bg-[var(--clr-gray-dark)] text-white hover:opacity-50' onClick={() => setShow(false)}>Отмена</Button>
                    </div>
                }
                classNames={{
                    panel: "max-w-[800px]"
                }}
            />


            <div className="w-full mt-10 p-[0_0_50px_0]">

                <div className="flex justify-between mb-5 border-b pb-5 gap-3">
                    <Button onClick={() => setBtnCount(0)} class={`border-2 w-full justify-center ${btnCount == 0 ? "border-[var(--clr-accent)] text-[var(--clr-accent)]" : "border-[var(--clr-border-gray)] text-[var(--clr-gray-dark)]"}`}>Пуск</Button>
                    <Button onClick={() => setBtnCount(1)} class={`border-2 w-full justify-center ${btnCount == 1 ? "border-[var(--clr-accent)] text-[var(--clr-accent)]" : "border-[var(--clr-border-gray)] text-[var(--clr-gray-dark)]"}`}>Стоп</Button>
                    <Button onClick={() => setBtnCount(2)} class={`border-2 w-full justify-center ${btnCount == 2 ? "border-[var(--clr-accent)] text-[var(--clr-accent)]" : "border-[var(--clr-border-gray)] text-[var(--clr-gray-dark)]"}`}>Cброс аварии</Button>
                </div>



                {datainpt.map((info, key) => {
                    return (
                        <Block key={key} title={info.title} items={info.items} setShow={setShow} />
                    )
                })}
            </div>
        </>
    );
});