import Icons from "@ui/Icons.jsx";

export default function AccordionItem({ title, children, isActive, onClick }) {
    return (
        <div className={`item-helper ${isActive ? "active" : ""}`}>
            <div className="item-helper__top" onClick={onClick}>
                <div className="item-helper__name">{title}</div>
                <div className={`item-helper__icon ${isActive ? "open" : ""}`}>
                    <Icons name="arrow-helper" />
                </div>
            </div>

            <div
                className="item-helper__infromation"
                style={{
                    marginTop: isActive ? "24px" : "0",
                    maxHeight: isActive ? "1500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease, margin-top 0.3s ease",
                }}
            >
                {children}
            </div>
        </div>
    );
}
