import { SidebarItem } from '../../../../shared/components/sidebar-item'
import { observer } from 'mobx-react-lite'
import { useLocation } from 'react-router-dom'


export const Sidebar = observer(() => {
    let location = useLocation();

    return (
        <div className="pt-10 pl-8 pr-6 bg-white min-h-full w-[245px] 2xl:w-[290px] flex-shrink-0 gap-10 flex flex-col rounded-r-lg">
            <div className='flex gap-4 flex-col w-full'>
                <SidebarItem link='/dispatcher' title='Мнемосхемы' isActive={location.pathname === '/dispatcher'} />
                <SidebarItem link={`/dispatcher/timmodel`} title='3D модель' isActive={location.pathname === `/dispatcher/timmodel`} />
                <SidebarItem link={`/dispatcher/equipment`} title='Оборудование' isActive={location.pathname === `/dispatcher/equipment`} />
                <SidebarItem link={`/dispatcher/orders`} title='Заявки' isActive={location.pathname === `/dispatcher/orders` || location.pathname === `/dispatcher/orders/create`} />
            </div>
            <div className='flex gap-8 flex-col mt-3'>
                <SidebarItem link='/gis/sewers' icon='cog' title='Настройки' isActive={location.pathname === '/gis/settings'} />
                <SidebarItem link='/gis/sewers' icon='help-circle' title='Помощь' isActive={location.pathname === '/gis/help'} />
                <SidebarItem link='/exit' icon='exit-client' title='Выйти' />
            </div>
        </div>
    )
})