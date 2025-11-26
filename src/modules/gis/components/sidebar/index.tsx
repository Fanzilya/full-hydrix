import { SidebarItem } from '../../../../shared/components/sidebar-item'
import { observer } from 'mobx-react-lite'
import { useLocation } from 'react-router-dom'


export const Sidebar = observer(() => {
    let location = useLocation();

    return (
        <div className="pt-10 pl-8 pr-6 bg-white min-h-full w-[245px] 2xl:w-[290px] flex-shrink-0 gap-10 flex flex-col">
            <div className='flex gap-4 flex-col w-full'>
                <SidebarItem link='/gis/companies' icon='water-company' title='Водоканалы' isActive={location.pathname === "/gis/companies"} />
                <SidebarItem link={`/gis/company/4`} icon='water-company' title='Водоканал' isActive={location.pathname === `/gis/company/4`} />

                <SidebarItem link='/gis/sewers' icon='sewer-car' title='Ассенизаторы' isActive={location.pathname === '/gis/sewers'} />
                <SidebarItem link='/gis/orders' icon='arrows-clockwise' title='Заявки' isActive={location.pathname === '/gis/orders'} />
                <SidebarItem link='/gis/drain-stations' icon='drain-stations' title='Сливные станции' isActive={location.pathname === '/gis/drain-stations'} />
                <SidebarItem link='/gis/operators' icon='operators' title='Операторы' isActive={location.pathname === '/gis/operators'} />
                <SidebarItem link='/gis/accident' icon='graph' title='Ликвидация аварий' isActive={location.pathname === '/gis/accident'} />
                <SidebarItem link='/gis/enterprises' icon='clipboard' title='Предприятия' isActive={location.pathname === '/gis/enterprises'} />

                <SidebarItem link={`/gis/company/5/stats`} icon='graph' title='Статистика' isActive={location.pathname === `/gis/company/5/stats`} />
            </div>
            <div className='flex gap-8 flex-col mt-3'>
                <SidebarItem link='/gis/sewers' icon='cog' title='Настройки' isActive={location.pathname === '/gis/settings'} />
                <SidebarItem link='/gis/sewers' icon='help-circle' title='Помощь' isActive={location.pathname === '/gis/help'} />
                <SidebarItem link='/exit' icon='exit-client' title='Выйти' />
            </div>
        </div>
    )
})