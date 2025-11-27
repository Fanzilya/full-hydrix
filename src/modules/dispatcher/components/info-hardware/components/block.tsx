import { observer } from 'mobx-react-lite';
import { datainptTypeItem } from '../data/data';
import { Icon } from '@/shared/ui/icon';
import { SwitchButton } from '@/shared/ui/switch-button';
import { Input } from '@/shared/ui/Inputs/input-text';
import { useState } from 'react';


interface BlockProps {
    title: string,
    items: datainptTypeItem[],
    setShow: (value: boolean) => void
}

export const Block = observer(({ title, items, setShow }: BlockProps) => {


    const [value, setValue] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <div className='flex items-center justify-between gap-2 cursor-pointer' onClick={() => setOpen(!open)}>
                <div className='font-semibold !text-[var(--clr-accent)] pt-3 pb-5'>{title}</div>

                <div style={{
                    rotate: open ? "90deg" : "-90deg",
                    transitionDuration: "0.3s"
                }}>
                    <Icon systemName='arrow-left-blue' />
                </div>
            </div>

            {open &&
                <div className='fadeInUp'>
                    {items.map((item, key) => {
                        return (
                            <div key={key} className="flex justify-between gap-3 items-center mb-5 border-b pb-5">
                                <span className="font-semibold text-[14px]">{item.name}</span>

                                <div className='flex items-center gap-4'>


                                    {item.type == "boolean"
                                        ?
                                        <>
                                            <SwitchButton
                                                onChange={() => { console.log() }}
                                                classNames={{
                                                    button: "w-[40px] rounded-[150px] block bg-[#757575] p-[3px]",
                                                    circle: "rounded-[150px] bg-white h-[18px] w-[18px]",
                                                }}
                                            />
                                        </>
                                        :

                                        <>
                                            <div>42</div>
                                            <Input type="number" value={value} onChange={setValue}
                                                className="border rounded-lg max-w-[80px] py-1 px-2"
                                                lengthOptions={{
                                                    maxLength: 5,
                                                }}
                                            />
                                        </>
                                    }

                                    <div className='px-2 py-2 bg-[var(--clr-accent)] rounded-lg hover:opacity-50 cursor-pointer duration-300' onClick={() => setShow(true)}>
                                        <Icon systemName='save-white' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }

        </div>
    );
});