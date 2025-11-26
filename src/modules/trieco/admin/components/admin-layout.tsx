import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { useEffect } from "react";
import adminModel from "../kernel/model/admin-model";
import { Meta } from "@/core/network/meta";
import { observer } from "mobx-react-lite";

export const AdminLayout = observer(() => {
    const navigate = useNavigate();

    const { meta, init } = adminModel;

    useEffect(() => {
        init();
    }, [])


    return (
        <div className="bg-[#F5F5F5] flex min-h-screen">
            <Sidebar />
            <div className="w-full pt-8 pr-12 pl-7 flex flex-col overflow-hidden">
                <Navbar />
                {
                    meta === Meta.SUCCESS && <Outlet />
                }
            </div>
        </div>
    )
})