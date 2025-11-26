import Icons from "@ui/Icons.jsx";
import Foaming from "./Items/Foaming.jsx";
import Surfacing from "./Items/Surfacing.jsx";
import Swelling from "./Items/Swelling.jsx";
import AccordionItem from "./AccordionItem.jsx";
import { useState } from "react";

export default function Helper() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const items = [
        { title: "Вспухание активного ила", content: <Swelling /> },
        { title: "Пенообразование", content: <Foaming /> },
        { title: "Всплытие активного ила", content: <Surfacing /> },
    ];

    return (
        <div className="dispatch-background helper">
            <div className="helper__container">
                <div className="helper__items">
                    {items.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            isActive={activeIndex === index}
                            onClick={() => handleToggle(index)}
                        >
                            {item.content}
                        </AccordionItem>
                    ))}
                </div>
            </div>
        </div>
    );
}
