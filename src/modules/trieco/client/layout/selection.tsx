import { useState } from "react";

type Props =  {
    items: SelectionItem[];
    onSelect?: (item: SelectionItem) => void;
    className?: string;
    selected?: number,
}

type SelectionItem = {
    value: number | string | any;
    label: string;
    disabled?: boolean;
}

export const SelectionComponent = ({items, onSelect, className, selected}: Props) => {
    const [selectedValue, setSelectedValue] = useState(selected);

    return (
        <div className={`flex space-x-2 ${className}`}>
            {items.map((option) => (
                
            ))}
        </div>
    );
};

