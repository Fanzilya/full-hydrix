import { observer } from 'mobx-react-lite';
import { Icon } from '../icon/index';
import { Children, useState } from 'react';

type Props = {
    children: React.ReactNode,
    name: string,
    classNames?: {
        container?: string
        button?: string,
        body?: string,
    }
}


export const ButtonCheckList = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className={`relative z-10 ${props.classNames?.container}`}>
            <div className={`flex items-center cursor-pointer ${props.classNames?.button}`} onClick={() => setOpen(!open)} >
                {props.name}
                <Icon systemName="arrow-down" className={`ml-1 ${open ? "rotate-180" : ""}`} />
            </div>
            {open && (
                <div className={`flex flex-col absolute top-6 right-0 px-[14px] py-[12px] bg-stone-50 rounded-lg shadow-md min-w-min w-full ${props.classNames?.body}`}>
                    {props.children}
                </div>
            )}
        </div>
    );
}