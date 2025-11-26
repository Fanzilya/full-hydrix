import React, { useEffect, useRef, useState } from 'react';
import modelModel from './entities/create-order-model';
import { Button, Input } from '@/core/UIKit';
import clientModel from '../../kernel/model/client-model';
import { observer } from 'mobx-react-lite';
import { getAdressCoordinates, getAdressList, getAdressText, getSuggestionClick } from "@/core/UIKit/mapVK/mapVk-functions";
import mmrgl, { Map, MapLibreGL } from 'mmr-gl';
import mapVKModel from "@/core/UIKit/mapVK/model/mapVK-model";

const code = "24928587-9095-4b8a-a99e-6eabfc05b2cd"

const YandexMapComponent: React.FC = observer(() => {
    const { user } = clientModel;
    const { nextPage, isAddress, changeAddress, model, getPoints, pickupPoints, setPickupPoint, showMap, setCoords, selectedPoint, changeMunicipality } = modelModel;

    const [showPoints, setShowPoints] = useState<any>(false);
    const { modelMap } = mapVKModel;


    useEffect(() => {
        getPoints(user?.id || 0)
    }, [])

    // ===РАБОТА С КАРТОЙ===
    // Ссылки на блок карты
    const mapContainer = useRef<HTMLDivElement | null>(null);
    // Ссылка на карту 
    const mapRef = useRef<mmrgl.Map | null>(null);
    //! Ссылка на маркер
    // const markerRef = useRef<mmrgl.Marker | null>(null);

    // Переменная для централизации карты по координатам
    const [center, setcenter] = useState<[number, number]>(modelMap.initialCenter);
    // Открытие списка найденных адресов
    const [show, setShow] = useState<boolean>(false);
    // Хранитель найденных адресов
    const [suggestions, setSuggestions] = useState<{ address: string; address_details: any }[]>([]);

    // Функция записи полученных данных
    const getResultMap = (data: any) => {
        changeAddress(data.address)
        setCoords(data.pin[1], data.pin[0])
        changeMunicipality(data.address_details.subregion)
    }

    // Поиск адреса по запросу
    useEffect(() => {
        getAdressList(model.address, setSuggestions)
    }, [model.address])

    // Выбор адреса из списка найденных
    const handleSuggestionClick = async (suggestion: { address: string; address_details: any }) => {
        try {
            // Фунция для получения данных по адресу из списка найденных
            const data = await getSuggestionClick(suggestion.address);

            mapRef.current?.setCenter([data.pin[0], data.pin[1]])
            mapRef.current?.setZoom(15)

            //! if (mapRef.current) markerRef.current?.setLngLat([data.pin[0], data.pin[1]]).addTo(mapRef.current).getLngLat()

            changeAddress(data.address)
            setCoords(data.pin[1], data.pin[0])
            changeMunicipality(data.address_details.subregion)
            setSuggestions([]);
            setShow(false)

        } catch (error) {
            console.error('Ошибка при обработке адреса:', error);
        }
    };

    // Закрытие списка рекомендованных
    const handleMouseDown = (event: any) => {
        if (!event.target.className.includes("adress")) {
            setShow(false)
            setShowPoints(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleMouseDown);
        return () => { document.removeEventListener('mousedown', handleMouseDown) }
    }, []);

    // Полечение данных по координатам
    useEffect(() => {
        if (!mapContainer.current) return;

        // Инициализация карты
        mmrgl.accessToken = modelMap.token;

        const map = new mmrgl.Map({
            container: mapContainer.current,
            zoom: modelMap.initialZoom,
            center: center,
            style: 'mmr://api/styles/main_style.json',
            hash: true,
        });
        mapRef.current = map;

        //! Вставление маркера
        // var marker = new mmrgl.Marker({
        //     pitchAlignment: "map",
        // })
        // markerRef.current = marker;


        // Обработчик клика для получения координат
        const handleMapClick = async (e: mmrgl.MapMouseEvent & { lngLat: mmrgl.LngLat; }) => {
            setcenter([e.lngLat.lng, e.lngLat.lat]);
            map.setCenter([e.lngLat.lng, e.lngLat.lat])
            //! markerRef.current?.setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(map).getLngLat()

            // Функция для получение данных по координатам 
            getAdressCoordinates(e.lngLat, getResultMap)
        };

        map.on('click', handleMapClick);


        if (!model.address) {
            var geolocate = new mmrgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            });
            map.addControl(geolocate);
            map.on('load', function () {
                geolocate.trigger();
            });
        } else {
            // Костыльно находим по адресу и полчаем соответвующий рисунок
            getAdressText(model.address, getResultMap)
                .then((data) => {
                    map.setCenter([data.pin[0], data.pin[1]])
                })
        }

        // Очистка при размонтировании
        return () => {
            if (mapRef.current) {
                mapRef.current.off('click', handleMapClick);
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);
    // ===КОНЕЦ===


    if (user?.roleId === 5 && !showMap) return <></>

    return (
        <div>
            <div className="mb-9 mt-10">
                <span className="font-bold text-[34px]">Выберите точку забора сточных вод</span>
            </div>

            <div className='mb-[30px] w-full relative'>
                <Input
                    onFocus={() => setShowPoints(true)}
                    value={model.address}
                    onChange={(v) => { setShow(true); setShowPoints(false); changeAddress(v) }}
                    placeholder='Адрес...'
                    isRequired={true}
                    headerText='Адрес' underlineText='Обязательное поле'
                    iconClass={showPoints ? "rotate-180" : ""}
                    icon='array-blue'
                />


                {showPoints && suggestions.length === 0 &&
                    <ul className='absolute z-10 bg-white border-[#4A85F6] border-[1px] rounded-lg max-h-[400px] overflow-y-auto w-full adress'>
                        <li className='px-3 py-2 font-bold adress'>
                            Ваши точки
                        </li>
                        {pickupPoints.map((point, index) => (
                            <li
                                key={index}
                                onClick={() => handleSuggestionClick({ address: point.address, address_details: "" })}
                                className='adress px-3 py-2 cursor-pointer hover:bg-[#4A85F624] hover:rounded-lg'
                            >
                                <div className='adress'>{point.address}</div>
                            </li>
                        ))}
                    </ul>
                }
                {(suggestions.length > 0 && model.address.length > 0 && show) && (
                    <ul className='absolute z-10 bg-white border-[#4A85F6] border-[1px] rounded-lg max-h-[400px] overflow-y-auto w-full adress'>
                        {suggestions.map((suggestion, index) => (
                            <li key={index} onClick={() => { handleSuggestionClick(suggestion) }} className='adress px-3 py-2 cursor-pointer hover:bg-[#4A85F624] hover:rounded-lg'>
                                <div className="adress">{suggestion.address}</div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />


            <Button
                disabled={!isAddress()}
                onClick={nextPage} children="Продолжить"
                class='bg-[#4A85F6] mt-[20px] rounded-lg max-w-[242px] w-full flex items-center justify-center font-bold text-[17px]' />
        </div>
    );
})

export default YandexMapComponent;
