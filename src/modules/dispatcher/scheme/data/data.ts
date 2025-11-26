
import infoCom1 from "../assets/info-com-1.jpg";
import infoCom2 from "../assets/info-com-2.jpg";
import infoCom3 from "../assets/info-com-3.jpg";
import infoCom4 from "../assets/info-com-4.jpg";

import { InformationsComponentsType, SchemeViewerPointType } from "../types/type";

export const InformationsComponents: InformationsComponentsType[] = [
    {
        title: "Насос Н4.1 рецикла",
        img: infoCom1,
        items: [
            {
                title: "Модель",
                value: "EspaDrainex 201"
            },
            {
                title: "Производительность",
                value: "4-20 м3/ч"
            },
            {
                title: "Напор",
                value: "3-10 м"
            },
            {
                title: "Поставщик",
                value: "ООО «Эспа»"
            },
            {
                title: "Производитель",
                value: "ООО «Гидрикс»"
            }
        ]
    },
    {
        title: "Барабанное сито №1",
        img: infoCom2,
        items: [
            {
                title: "Модель",
                value: "TORO TR 40/75"
            },
            {
                title: "Производительность",
                value: "10 м3/ч"
            },
            {
                title: "Поставщик",
                value: "ООО «Гидрикс»"
            },
            {
                title: "Производитель",
                value: "ООО «Гидрикс»"
            }
        ]
    },
    {
        title: "Барабанное сито №2",
        img: infoCom2,
        items: [
            {
                title: "Модель",
                value: "TORO TR 40/75"
            },
            {
                title: "Производительность",
                value: "10 м3/ч"
            },
            {
                title: "Поставщик",
                value: "ООО «Гидрикс»"
            },
            {
                title: "Производитель",
                value: "ООО «Гидрикс»"
            }
        ]
    },
    {
        title: "Песколовка №1",
        img: infoCom3,
        items: [
            {
                title: "Модель",
                value: "SPU-10"
            },
            {
                title: "Производительность",
                value: "10 м3/ч"
            },
            {
                title: "Поставщик",
                value: "ООО «Гидрикс»"
            },
            {
                title: "Производитель",
                value: "ООО «Гидрикс»"
            }
        ]
    },
    {
        title: "Песколовка №2",
        img: infoCom3,
        items: [
            {
                title: "Модель",
                value: "TORO TR 40/75"
            },
            {
                title: "Производительность",
                value: "10 м3/ч"
            },
            {
                title: "Поставщик",
                value: "ООО «Гидрикс»"
            },
            {
                title: "Производитель",
                value: "ООО «Гидрикс»"
            }
        ]
    },
    {
        title: "Мешалка усреднителя №1",
        img: infoCom4,
        items: [
            {

                title: "Модель",
                value: "Иртыш ПМ2 230-1,1/8-116"
            },
            {
                title: "Производительность",
                value: "10 м3/ч"
            },
            {
                title: "Поставщик",
                value: 'ООО "ВСМК"'
            },
            {
                title: "Производитель",
                value: 'ООО "ПЭК"'
            }
        ]
    },
    {
        title: "Мешалка усреднителя №2",
        img: infoCom4,
        items: [
            {

                title: "Модель",
                value: "Иртыш ПМ2 230-1,1/8-116"
            },
            {
                title: "Производительность",
                value: "10 м3/ч"
            },
            {
                title: "Поставщик",
                value: 'ООО "ВСМК"'
            },
            {
                title: "Производитель",
                value: 'ООО "ПЭК"'
            }
        ]
    },
    {
        title: "Мешалка усреднителя №3",
        img: infoCom4,
        items: [
            {

                title: "Модель",
                value: "Иртыш ПМ2 230-1,1/8-116"
            },
            {
                title: "Производительность",
                value: "10 м3/ч"
            },
            {
                title: "Поставщик",
                value: 'ООО "ВСМК"'
            },
            {
                title: "Производитель",
                value: 'ООО "ПЭК"'
            }
        ]
    },

];


export const points: SchemeViewerPointType[] = [
    { top: "48%", left: "5%", size: [18, 18], label: "Насос Н4.1 рецикла", id: 1 },
    { top: "7%", left: "17%", size: [47, 47], label: "Барабанное сито №1", id: 2 },
    { top: "25%", left: "17%", size: [47, 47], label: "Барабанное сито №2", id: 3 },
    { top: "25%", left: "23%", size: [117, 68], label: "Песколовка №1", id: 5 },
    { top: "8%", left: "23%", size: [117, 68], label: "Песколовка №2", id: 4 },
    { top: "30.5%", left: "36%", size: [25, 25], label: "Мешалка усреднителя №1", id: 6 },
    { top: "30.5%", left: "40.5%", size: [25, 25], label: "Мешалка усреднителя №2", id: 7 },
    { top: "30.5%", left: "45.5%", size: [25, 25], label: "Мешалка усреднителя №3", id: 8 },
];
