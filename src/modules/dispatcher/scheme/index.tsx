import "./Scheme.scss";
// import leftScheme from '@assets/imgs/scheme-left.jpg'
// import rightScheme from '@assets/imgs/scheme-right.jpg'
import { useState } from 'react';
import InfoCart from './components/info-card.js';
import SchemeViewer from "./ViewScheme.js";

import InfoComp from "./InfoComp.js"


// data
import { InformationsComponents, points } from "./data/data.js";
import { InformationsComponentsType } from "./types/type.js";




export const Scheme = () => {
    const [fade, setFade] = useState(false);
    const [panelInfoComponent, setPanelInfoComponent] = useState<InformationsComponentsType>({ title: '', img: '', items: [] });

    const handleChangeImage = (id: number) => {
        setFade(true);

        setTimeout(() => {
            setPanelInfoComponent(id == 0 ? { title: '', img: '', items: [] } : InformationsComponents[id - 1]);
            setFade(false);
        }, 300);
    };

    const [isTabInformation, setIsTabInformation] = useState<number>(0);

    return (
        <>
            <div className="informations-dispatch__scheme scheme-dispatch relative mt-10">
                <div className="absolute  top-[-38px] left-[30px] flex gap-3">
                    <div className={`hover:bg-[var(--clr-accent)] hover:text-white duration-300 cursor-pointer px-[15px] pt-[7px] pb-[6px] rounded-tl-lg rounded-tr-lg font-semibold  ${isTabInformation == 0 ? "bg-[var(--clr-accent)] text-white" : "bg-[#E6E9EF] text-[#757575]"}`} onClick={() => setIsTabInformation(0)}>
                        Технологическое оборудование
                    </div>
                    <div className={`hover:bg-[var(--clr-accent)] hover:text-white duration-300 cursor-pointer px-[15px] pt-[7px] pb-[6px] rounded-tl-lg rounded-tr-lg font-semibold  ${isTabInformation == 1 ? "bg-[var(--clr-accent)] text-white" : "bg-[#E6E9EF] text-[#757575]"}`} onClick={() => setIsTabInformation(1)}>
                        Отопление
                    </div>
                    <div className={`hover:bg-[var(--clr-accent)] hover:text-white duration-300 cursor-pointer px-[15px] pt-[7px] pb-[6px] rounded-tl-lg rounded-tr-lg font-semibold  ${isTabInformation == 2 ? "bg-[var(--clr-accent)] text-white" : "bg-[#E6E9EF] text-[#757575]"}`} onClick={() => setIsTabInformation(2)}>
                        Вентиляция
                    </div>
                    <div className={`hover:bg-[var(--clr-accent)] hover:text-white duration-300 cursor-pointer px-[15px] pt-[7px] pb-[6px] rounded-tl-lg rounded-tr-lg font-semibold  ${isTabInformation == 3 ? "bg-[var(--clr-accent)] text-white" : "bg-[#E6E9EF] text-[#757575]"}`} onClick={() => setIsTabInformation(3)}>
                        СКУД
                    </div>
                    <div className={`hover:bg-[var(--clr-accent)] hover:text-white duration-300 cursor-pointer px-[15px] pt-[7px] pb-[6px] rounded-tl-lg rounded-tr-lg font-semibold  ${isTabInformation == 4 ? "bg-[var(--clr-accent)] text-white" : "bg-[#E6E9EF] text-[#757575]"}`} onClick={() => setIsTabInformation(4)}>
                        Охрано-пожарная сигнализация
                    </div>
                </div>

                <div className="grid grid-cols-[4fr_2fr] gap-[20px] h-full pb-[80px]">

                    <SchemeViewer setInfo={handleChangeImage} />

                    <div className="bg-white rounded-[20px] p-[30px] h-full">

                        {
                            panelInfoComponent.title.length == 0
                                ? <InfoCart className={`panel-scheme__info ${fade ? "fade-out" : "fade-in"} `} />
                                : <InfoComp className={`panel-scheme__info ${fade ? "fade-out" : "fade-in"}`} item={panelInfoComponent} onClick={handleChangeImage} />
                        }

                    </div>
                </div>
            </div >
        </>
    )
}