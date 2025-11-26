import logo from '@/core/static/img/logo.svg'
import { SidebarItem } from './sidebar-item'
import { observer } from 'mobx-react-lite'
import { useLocation } from 'react-router-dom'
import adminModel from '../kernel/model/admin-model'
import { useEffect } from 'react'

export const Sidebar = observer(() => {
    let location = useLocation();
    const { logout } = adminModel;


    const nav = [
        {
            name: "sad",
            link: 'asd'
        }
    ];

    return (
        <div className="pt-10 pl-8 pr-3 bg-white min-h-screen w-min w-full flex flex-col gap-14">
            <div className='flex items-center gap-[22px]'>
                <img src={logo} />
            </div>
            <div className='flex gap-8 flex-col'>

                {nav.map((item) => {
                    return (
                        <SidebarItem link='/admin/sewers' icon='sewer-car' isActive={location.pathname === "/admin/sewers"} hoverText="Список ассенизаторов" />
                    );
                })}

                <SidebarItem link='/admin/sewers' icon='sewer-car' isActive={location.pathname === "/admin/sewers"} hoverText="Список ассенизаторов" />
                <SidebarItem link='/admin/orders' icon='client-clipboard' isActive={location.pathname === '/admin/orders'} hoverText='Управление заявками' />
                {/* <SidebarItem link='/admin/statistics' icon='arrows-clockwise' title='Управление сменами' isActive={location.pathname === '/admin/shifts'}/> */}
                < SidebarItem link='/admin/calendar' icon='calendar' isActive={location.pathname === '/admin/calendar'} hoverText='График' />
                <SidebarItem link='/admin/statistics' icon='graph' isActive={location.pathname === '/admin/statistics'} hoverText='Статистика' />
                <SidebarItem link='/admin/cash' icon='card' isActive={location.pathname === '/admin/cash'} hoverText='Счет' />
            </div>
            <div className='flex gap-8 flex-col mt-3'>
                <SidebarItem link='/admin/settings' icon='cog' isActive={location.pathname === '/admin/settings'} hoverText='Настройки' />
                {/* <SidebarItem link='/admin/sewers' icon='help-circle' title='Помощь' isActive={location.pathname === '/admin/help'}/> */}
                <div onClick={logout}><SidebarItem link='/admin/sewers' icon='exit-client' hoverText='Выйти' /></div>
            </div>
        </div>
    )
})