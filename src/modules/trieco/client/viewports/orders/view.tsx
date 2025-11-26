import { Table } from "@/core/UIKit/table"
import { ColumnDef } from "@tanstack/react-table"
import { format, parseISO } from 'date-fns';
import { Button } from "@/core/UIKit";
import { Link } from "react-router-dom";
import { Icon } from "@/core/UIKit/icon";
import { useEffect, useRef, useState } from "react";
import clientModel from "../../kernel/model/client-model";
import ordersListModel from "./model/order-list-model";
import { observer } from "mobx-react-lite";
import { ru } from "date-fns/locale";
import { OrderModal } from "./components/order-modal";
import orderModel from "./model/order-model";
import { OrderStatus, StatusColor, OrderStatusText } from "@/core/lib/order";
import { formatAddress } from "@/core/UIKit/format-adress";
import { toast } from "react-toastify";
import { OrderCard } from "../../components/oder-card";


const columns: ColumnDef<any, any>[] = [
    {
        header: "",
        accessorKey: "selfCreated",
        size: 30,
        cell: ({ row }) => {
            return (
                <div style={{ flex: "0 0 50px", textAlign: "center" }}>
                    {row.original["selfCreated"] ? (
                        <Icon width={30} systemName="ambulance" className="cursor-pointer" />
                    ) : (
                        <div style={{ width: 30, height: 30 }}></div>
                    )}
                </div>
            );
        },
    },
    {
        header: "Номер заявки",
        accessorKey: 'id',
        size: 190,
        cell: info => <div className="text-[#4A66C9] text-[12px] font-bold">{info.getValue()}</div>,
    },
    {
        header: "Адрес",
        accessorKey: 'adress',
        size: 350,
        cell: info => {
            return (
                <span className="text-[12px]">{formatAddress(info.getValue())}</span>
            )
        },
    },
    {
        header: 'Объём',
        size: 100,
        accessorKey: 'wasteVolume',
        cell: info => {
            return (
                <span className="text-[12px]">{info.getValue()} м3</span>
            )
        },

    },
    {
        header: 'Дата и время',
        accessorKey: 'carNumber',
        cell: ({ row }) => {
            const arrivalStartDate = parseISO(row.original["arrivalStartDate"])
            const arrivalEndDate = parseISO(row.original["arrivalEndDate"])
            return (
                <div className="text-[12px] text-center">{format(arrivalStartDate, 'dd.MM.yyyy')} {format(arrivalStartDate, 'HH:mm')}-{format(arrivalEndDate, 'HH:mm')}</div>
            )
        },

    },
    {
        header: 'Дата создания',
        accessorKey: 'timeOfPublication',
        cell: info => {
            const date = new Date(info.getValue())
            return (
                <div className="text-[12px] text-center">{format(date, 'd MMMM yyyy HH:mm', { locale: ru })}</div>
            )
        },

    },
    {
        header: 'Статус',
        accessorKey: 'orderStatusId',
        size: 250,
        cell: info => {
            let el = Number(info.getValue()) as OrderStatus

            if (info.getValue() === undefined) {
                el = OrderStatus.Cancelled
            }
            const bgColor = `${StatusColor(el)} `
            const style = `text-white rounded-[30px] py-[6px] px-[32px] text-center m-auto w-max whitespace-nowrap`

            if (!info.getValue()) {
                toast("Подходящих заявок не найдено", { progressStyle: { background: "red" } });
            }
            return (

                <div className={style} style={{ backgroundColor: bgColor }}>
                    <span>{OrderStatusText[el]}</span>
                </div>
            )
        },
    },
    {
        header: 'Код',
        accessorKey: 'code',
        size: 190,
        cell: info => {
            return (
                <span className="text-[12px] w-full text-center font-semibold">{info.getValue()}</span>
            )
        },
    },
]


export const OrdersView = observer(() => {
    const { user } = clientModel;
    const { initMain, modelMain, init, model, filteredModel, filter, filterId, isInit, toggleInit } = ordersListModel;

    useEffect(() => {
        init(user?.id ?? 0);
        initMain(user?.id ?? 0)
        return () => {
            toggleInit()
        }
    }, [])
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const statuses = Object.keys(OrderStatusText).map((key) => Number(key));

    if (!isInit) return <></>

    return (
        <>
            <div className="relative">
                <OrderModal isOpen={isOrderModalOpen} setShow={setIsOrderModalOpen} />
                <div className="py-16 flex flex-col gap-8">

                    <div className="overflow-x-auto w-full pb-1">
                        <div className="flex flex-row gap-5 w-fit" ref={scrollContainerRef}>
                            {modelMain.map(x => {
                                const startDate = new Date(x.arrivalStartDate ?? "")
                                const endDate = new Date(x.arrivalEndDate ?? "")
                                const formattedDate = format(startDate, 'd MMMM yyyy', { locale: ru });
                                return (<OrderCard id={x.id} date={formattedDate} time={`${format(startDate, 'HH:mm')}-${format(endDate, 'HH:mm')}`} statusId={x.orderStatusId} status={OrderStatusText[x.orderStatusId as OrderStatus]} title="Вывоз ЖБО" code={""} />)
                            })}
                        </div>
                    </div>

                    <Button class="bg-[#E03131] rounded-lg px-4 py-3 max-w-[180px] ">
                        <Link to={'/order/create'} className="w-full flex items-center justify-between">
                            <span className="text-white">Создать заявку</span>
                            <Icon systemName="arrow-left" />
                        </Link>
                    </Button>
                    <div>
                        <div className="flex flex-row gap-4 items-center">
                            <Button onClick={() => { filter(-1) }} children="Все" class={`!text-[#2879E4] text-[16px] ${filterId !== -1 && "!text-[#999999]"}`} />
                            <div className="border-r-[1px] border-[#2879E4] w-[2px] h-[24px]" />
                            <div className="flex flex-row gap-4 items-center">
                                <span className="text-[#999999]">Статус: </span>
                                <div className="flex flex-row gap-4 items-center">
                                    {statuses.map((status) => (
                                        <Button
                                            children={OrderStatusText[status]}
                                            onClick={() => { filter(status) }}
                                            class={`!py-1 !px-3 min-w-fit w-full !rounded-[20px] text-white text-[16px]  ${filterId !== 6 && "bg-opacity-20"}`}
                                            style={{ backgroundColor: StatusColor(status) }} />
                                    ))}

                                </div>
                            </div>
                        </div>
                        <Table pageSize={10} columns={columns} data={model} onRowClick={(value) => { orderModel.open(model.find(x => x.id === value.id)!); setIsOrderModalOpen(true) }} />
                    </div>
                </div>
            </div>
        </>
    )
})