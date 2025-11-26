import { Icon } from "@/shared/ui/icon";

type Props = {
    title: string;
    description?: string;
    disabledDescription?: string;
    icon?: string;
    disabledIcon?: string;
    disabled?: boolean;
    onClick?: () => void;
};

export const Card = ({ title, description, disabledDescription, icon, disabledIcon, onClick, disabled }: Props) => {
    const cardStyles = disabled
        ? "bg-[#CDCDCD] cursor-not-allowed"
        : "bg-[#4A85F6] cursor-pointer";

    const textStyles = disabled
        ? "text-[#000000]"
        : "text-white";

    const currentIcon = disabled ? disabledIcon : icon;
    const currentDescription = disabled ? disabledDescription : description;

    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    return (
        <div
            className={`${cardStyles} rounded-[20px] py-6 px-4 md:py-10 md:px-7 flex flex-col sm:flex-row gap-4 w-full w-[46%] justify-between items-center`}
            onClick={handleClick}
        >
            <div className="flex flex-col gap-2 justify-center items-start">
                <div className="flex gap-2 justify-center items-center">
                    <p className={`${textStyles} wxl:text-[22px] text-[20px] font-semibold max-w-[200px] w-full`}>
                        {title}
                    </p>
                    {currentIcon && (
                        <Icon
                            systemName={currentIcon}
                            className="max-w-[55px] max-h-[48px]"
                            height={52}
                        />
                    )}
                </div>
                {currentDescription && (
                    <p className={`${textStyles} 2xl:text-[14px] text-[12px]`}>
                        {currentDescription}
                    </p>
                )}
            </div>
        </div>
    );
};