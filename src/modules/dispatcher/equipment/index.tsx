import { TableColumn } from "@/shared/ui/table/setting/types";
import { itemstable } from "./data/data";
import { ItemsTableType, StatusClass, StatusText } from "./type/type";
import { Table } from "@/shared/ui/table/index";
import { useNavigate } from "react-router-dom";


const columns: TableColumn<ItemsTableType>[] = [
    {
        header: "Наименование",
        key: 'companyName',
        width: '0.7fr',
        cell: ({ name }) => {
            return (
                <span className="text-[14px] text-[#222B45] font-semibold  text-center w-full">{name}</span>
            )
        },
    },
    {
        header: "Расположение",
        key: 'companyName',
        width: '0.7fr',
        cell: ({ adress }) => {
            return (
                <span className="text-[14px] text-[#222B45] font-semibold  text-center w-full">{adress}</span>
            )
        },
    },
    {
        header: "Марка",
        key: 'companyName',
        width: '0.7fr',
        cell: ({ marka }) => {
            return (
                <span className="text-[14px] text-[#222B45] font-semibold  text-center w-full">{marka}</span>
            )
        },
    },
    {
        header: "Изготовитель",
        key: 'companyName',
        width: '0.7fr',
        cell: ({ manufacturer }) => {
            return (
                <span className="text-[14px] text-[#222B45] font-semibold  text-center w-full">{manufacturer}</span>
            )
        },
    },
    {
        header: "Поставщик",
        key: 'companyName',
        width: '0.7fr',
        cell: ({ supplier }) => {
            return (
                <span className="text-[14px] text-[#222B45] font-semibold text-center w-full">{supplier}</span>
            )
        },
    },
    {
        header: "Статус",
        key: 'companyName',
        width: '0.7fr',
        cell: ({ status }) => {
            return (
                <span className="text-[14px] text-[#222B45] font-semibold w-full">
                    <div className="table__column" >
                        <span className={`table-equipmentregistry__column-status ${StatusClass(status)}`} >
                            {StatusText(status)}
                        </span>
                    </div>
                </span>
            )
        },
    },
]

export const EquipmentRegistry = () => {

    const getStatus = (status: number) => {
        switch (status) {
            case 1:
                return <div className="table__column">
                    <span className="table-equipmentregistry__column-status _green">
                        В работе
                    </span>
                </div>;
            case 2:
                return <div className="table__column">
                    <span className="table-equipmentregistry__column-status _gray">
                        В ожидании
                    </span>
                </div>;
            case 3:
                return <div className="table__column">
                    <span className="table-equipmentregistry__column-status _red">
                        Авария
                    </span>
                </div>;
        }
    }


    const navigate = useNavigate();

    return (
        <>
            {/* <div className="table__top">
                <div className="table__search search ">
                    <div className="search__body">
                        <input type="text" className="search__input" placeholder="Поиск по наименованию" />
                        <button className="search__icon _icon-search">
                            <Icons name="search" />
                        </button>
                    </div>
                </div>

                <div className="table__left">
                    <ComboBox className="table__combobox" list={["Все", "Онлайн", "Оффлайн"]} />
                    <ComboBox className="table__combobox" list={["Функционирует", "Авария", "Плановое обслуживание"]} />

                    <div className="table__export export-button">Экспортировать</div>
                </div>
            </div> */}


            <Table
                columns={columns}
                data={itemstable}
                onRowClick={() => navigate("/dispatcher/equipment-about/passport")}
            />
        </>
    )
}