import { observer } from 'mobx-react-lite';
import { Icon } from "@/shared/ui/icon"
import { InformationsType } from '@/modules/dispatcher/pages/scheme/types/type';


interface HardwareReviewProps {
    items: InformationsType[]
}

export const HardwareReview = observer(({ items }: HardwareReviewProps) => {
    return (
        <>
            <div className="info-comp__content">
                <div className="info-comp__section">
                    <div className="info-comp__subtitle">Характеристики</div>
                    {items.map((item, index) => (
                        <div className="info-comp__item" key={index}>
                            <div className="info-comp__title">{item.title}</div>
                            <div className="info-comp__description">{item.value}</div>
                        </div>
                    ))}
                </div>
                <div className="info-comp__section">
                    <div className="info-comp__subtitle">Документация</div>

                    <div className="info-comp__doc">
                        <Icon systemName="docs" />
                        <span>Паспорт</span>
                    </div>
                    <div className="info-comp__doc">
                        <Icon systemName="docs" />
                        <span>Инструкция</span>
                    </div>
                    <div className="info-comp__doc">
                        <Icon systemName="docs" />
                        <span>Гарантийный талон</span>
                    </div>
                </div>
            </div>
        </>
    );
});