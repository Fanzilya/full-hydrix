import React, { useRef, useState, useEffect } from "react";
import image from './assets/big.jpg'
import "./ViewScheme.scss";
import { SchemeViewerType } from "./types/type";
import { points } from "./data/data";

export default function SchemeViewer({ setInfo }: SchemeViewerType) {


    // Счётчики

    const [counters, setCounters] = useState([
        { id: 1, name: "Расход QF1", value: 0, unit: "м³/ч", top: "8.4%", left: "41.7%", min: 4, max: 9 },
        { id: 2, name: "Концентрация О2", value: 0, unit: "г/л", top: "8.4%", left: "51%", min: 5, max: 10 },
        { id: 3, name: "Расход QF2", value: 0, unit: "м³/ч", top: "8.4%", left: "54.7%", min: 5, max: 10 },
        { id: 4, name: "Расход QF3", value: 0, unit: "м³/ч", top: "8.4%", left: "67%", min: 5, max: 10 },
        { id: 5, name: "Уровень воды", value: 0, unit: "м", top: "8.4%", left: "70.4%", min: 5, max: 10 },
        { id: 6, name: "Давление", value: 0, unit: " кПа", top: "8.4%", left: "73.8%", min: 5, max: 10 },
        // Внизу
        { id: 7, name: "Расход QF1", value: 0, unit: "м³/ч", top: "54%", left: "41.7%", min: 4, max: 9 },
        { id: 8, name: "Концентрация О2", value: 0, unit: "г/л", top: "54%", left: "51%", min: 5, max: 10 },
        { id: 9, name: "Расход QF2", value: 0, unit: "м³/ч", top: "54%", left: "54.7%", min: 5, max: 10 },
        { id: 10, name: "Расход QF3", value: 0, unit: "м³/ч", top: "54%", left: "67%", min: 5, max: 10 },
        { id: 11, name: "Уровень воды", value: 0, unit: "м", top: "54%", left: "70.4%", min: 5, max: 10 },
        { id: 12, name: "Давление", value: 0, unit: "кПа", top: "54%", left: "73.8%", min: 5, max: 10 },

        //     top: 53%;
        // left: 25.7%;
        { id: 13, name: "Давление аэрация", value: 0, unit: "бар", top: "48%", left: "25.7%", min: 5, max: 50 },
        { id: 14, name: "ㅤДавление МБРㅤ", value: 0, unit: "бар", top: "53%", left: "25.7%", min: 5, max: 50 },
        { id: 15, name: "Расход QF4", value: 0, unit: "м³/ч", top: "24.4%", left: "94.1%", min: 4, max: 9 },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounters((prev) =>
                prev.map((c) => ({
                    ...c,
                    value: (Math.random() * (c.max - c.min) + c.min).toFixed(1),
                }))
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    // end Счётчики




    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const [scale, setScale] = useState(1.3);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [start, setStart] = useState({ x: 0, y: 0 });
    const [bounds, setBounds] = useState({ minX: 0, minY: 0, maxX: 0, maxY: 0 });

    const toggleBodyScroll = (disable) => {
        document.body.style.overflow = disable ? "hidden" : "";
    };

    const disableBodyScroll = () => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollBarWidth}px`; // компенсируем пропавший скролл
    };

    const enableBodyScroll = () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    };



    const updateBounds = () => {
        const container = containerRef.current;
        const img = imgRef.current;
        if (!container || !img) return;

        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const imageWidth = img.naturalWidth * scale;
        const imageHeight = img.naturalHeight * scale;

        // границы, чтобы картинка не ушла за экран
        const minX = containerWidth - imageWidth;
        const minY = containerHeight - imageHeight;

        setBounds({
            minX,
            minY,
            maxX: 0,
            maxY: 0,
        });

        // проверяем, что offset в допустимых пределах
        setOffset((prev) => ({
            x: Math.min(Math.max(prev.x, minX), 0),
            y: Math.min(Math.max(prev.y, minY), 0),
        }));
    };

    useEffect(() => {
        updateBounds();
        window.addEventListener("resize", updateBounds);
        return () => window.removeEventListener("resize", updateBounds);
    }, [scale]);

    const handleWheel = (e) => {
        e.preventDefault();
        toggleBodyScroll(true);
        disableBodyScroll()

        const zoom = e.deltaY > 0 ? 0.7 : 1.1;
        setScale((prev) => Math.min(Math.max(prev * zoom, 1), 3));

        clearTimeout(handleWheel.timeout);
        // handleWheel.timeout = setTimeout(() => toggleBodyScroll(false), 200);
    };

    const handleMouseDown = (e) => {
        setDragging(true);

        setStart({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y,
        });
    };

    const handleMouseMove = (e) => {
        if (!dragging) return;
        const newX = e.clientX - start.x;
        const newY = e.clientY - start.y;

        // ограничиваем движение в пределах bounds
        setOffset({
            x: Math.min(Math.max(newX, bounds.minX), bounds.maxX),
            y: Math.min(Math.max(newY, bounds.minY), bounds.maxY),
        });
    };

    const handleMouseUp = () => {
        enableBodyScroll()
        toggleBodyScroll(false);
        setDragging(false)
    };

    return (

        <div
            className="scheme-view__container"
            ref={containerRef}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div
                className="scheme-view__wrapper"
                style={{
                    transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                    transformOrigin: "top left",
                    cursor: dragging ? "grabbing" : "grab",
                }}
            >
                <img
                    ref={imgRef}
                    src={image}
                    alt="scheme"
                    className="scheme-view__image"
                    onLoad={updateBounds}
                />

                {points.map((p, i) => (
                    <div
                        onClick={() => setInfo(p.id)}
                        key={i}
                        className="scheme-view__point"
                        style={{
                            top: p.top,
                            left: p.left,
                            width: p.size[0],
                            height: p.size[1],
                        }}
                    />
                ))}

                {counters.map((c) => (
                    <div
                        key={c.id}
                        className="scheme-counter"
                        style={{ top: c.top, left: c.left, position: "absolute" }}
                    >
                        <div className="scheme-counter__name">{c.name}</div>
                        <div className="scheme-counter__value">
                            <span>{c.value}</span>{c.unit}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
