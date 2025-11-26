import { Table } from '@/shared/ui/table/index';
import { TableColumn } from '@/shared/ui/table/setting/types';
import { observer } from 'mobx-react-lite';
import { ControlBlockAllType, TableSchemeType } from './service/table-scheme-service';
import { tableSchemeModel } from './model/table-scheme-model';
import { useEffect } from 'react';

const columns: TableColumn<ControlBlockAllType>[] = [
    {
        header: "Название оборудования",
        key: 'name',
        cell: ({ name }) => {
            return <div className='text-center w-full underline text-[#757575] font-semibold'>{name}</div>
        },
    },
    {
        header: "Название node",
        key: 'node',
        cell: ({ plcIpAdress }) => {
            return <div className='text-center w-full underline text-[#757575] font-semibold'>{plcIpAdress}</div>
        },
    },
    {
        header: "Значение",
        key: 'node',
        cell: ({ id }) => {
            return <></>
            // return <div className='text-center w-full underline text-[#757575] font-semibold'>{tableSchemeModel.SensorValueCell()}</div>
        },
    },
]

export const TableScheme = observer(() => {

    const { list, getInfoSensor } = tableSchemeModel

    useEffect(() => {
        getInfoSensor()
    }, [])

    function handleRowClick(row: ControlBlockAllType) {
        getInfoSensor()
    }

    return (
        <>
            <Table
                classNames={{
                    thead: "child-th-border-left"
                }}
                columns={columns}
                data={list}
                onRowClick={handleRowClick}
            />

        </>
    );
});