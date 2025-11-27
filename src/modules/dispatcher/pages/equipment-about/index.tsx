import { useState } from "react";
import { Link, Navigate, NavLink, Outlet, useLocation } from "react-router-dom";

export const EquipmentAbout = () => {
    let location = useLocation();
    const [isTabInformation, setIsTabInformation] = useState(0);

    return (
        <div className="informations-dispatch__requestregistry relative mt-10">
            <div className="absolute  top-[-38px] left-[30px] flex gap-3">
                <NavLink
                    to="/dispatcher/equipment-about/passport"
                    className={({ isActive }) => `hover:bg-[var(--clr-accent)] hover:text-white duration-300 cursor-pointer px-[15px] pt-[7px] pb-[6px] rounded-tl-lg rounded-tr-lg font-semibold ${isActive ? "bg-[var(--clr-accent)] text-white" : "bg-[#E6E9EF] text-[#757575]"}`}
                >
                    Паспорт
                </NavLink>
                <NavLink
                    to="/dispatcher/equipment-about/controll"
                    className={({ isActive }) => `hover:bg-[var(--clr-accent)] hover:text-white duration-300 cursor-pointer px-[15px] pt-[7px] pb-[6px] rounded-tl-lg rounded-tr-lg font-semibold ${isActive ? "bg-[var(--clr-accent)] text-white" : "bg-[#E6E9EF] text-[#757575]"}`}
                >
                    Управление
                </NavLink>
            </div>


            <Outlet />
        </div>
    );
}