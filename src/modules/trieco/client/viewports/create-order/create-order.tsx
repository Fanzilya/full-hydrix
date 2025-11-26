// import { AddAddress } from "./add-address-2"
import createOrderModel from "./entities/create-order-model"
import { AddDetails } from "./add-details";
import { observer } from "mobx-react-lite";
import { Created } from "./created";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import clientModel from "../../kernel/model/client-model";
import { toast } from "react-toastify";
import YandexMapComponent from "./add-adderss";
import { getAdressCoordinates } from "@/core/UIKit/mapVK/mapVk-functions";

export const CreateOrder = observer(() => {
    const { pageCounter, setPage } = createOrderModel;
    const { user } = clientModel;
    const location = useLocation();
    const [params] = useSearchParams();


    const { changeAddress, model, changeMunicipality } = createOrderModel;


    useEffect(() => {
        if (params.get("result") != null) {
            if (params.get('result') === "success") {
                setPage(3)
                createOrderModel.save(user?.id || 0);
                params.delete('result');
                const newUrl = `${window.location.pathname}?${params.toString()}`;
                window.history.replaceState(null, '', newUrl);
            }
            else {
                toast("Не удалось создать заявку", { progressStyle: { background: "red" } });
            }
        }

        if (params.get("adress") !== null) {
            getAdressCoordinates({ lat: Number(params.get("latitude")), lng: Number(params.get("longitude")) || 0 }, (data: any) => {

                changeAddress(data.address || "");
                changeMunicipality(data.address_details.subregion)

                model.longitude = Number(params.get("longitude"))
                model.latitude = Number(params.get("latitude"))
                setPage(2)

            })
        }
    }, [location])

    return (
        <>
            {pageCounter === 1 && <YandexMapComponent />}
            {pageCounter === 2 && <AddDetails />}
            {pageCounter === 3 && <Created />}
            {pageCounter === 4 && <></>}
        </>
    )

})