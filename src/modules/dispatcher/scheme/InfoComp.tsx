import image from './assets/info-cart.png';
import { Icon } from "@/shared/ui/icon"
import { InfoCompType } from './types/type';

export default function InfoComp({ className, item, onClick }: InfoCompType) {

    return (
        <>
            <div className={`info-comp ${className}`}>
                <div className="info-comp__body">
                    <button className="info-comp__close" onClick={() => onClick(0)}>
                        <Icon systemName="arrow-back-blue" />
                        <span>назад</span>
                    </button>

                    <div className="info-comp__name">
                        {item.title}
                    </div>

                    <div className="info-comp__image">
                        <img src={item.img} alt="Info" />
                    </div>

                    <div className="info-comp__btns">
                        <div className="info-comp__btn _active">Обзор</div>
                        <div className="info-comp__btn">Управление</div>
                    </div>

                    <div className="info-comp__content">
                        <div className="info-comp__section">
                            <div className="info-comp__subtitle">Характеристики</div>
                            {item.items.map((item, index) => (
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

                        <div className="info-comp__section">
                            <div className="info-comp__subtitle">Журнал событий</div>

                            <div className="info-comp__act">
                                <span className='info-comp__act-date'>18.10.2025 12.34 - </span> <span className='info-comp__act-status _red'>отключение</span>
                            </div>
                            <div className="info-comp__act">
                                <span className='info-comp__act-date'>18.10.2025 12.36 - </span> <span className='info-comp__act-status _green'>запуск</span>
                            </div>
                            <div className="info-comp__act">
                                <span className='info-comp__act-date'>20.12.2025 12.10 - </span> <span className='info-comp__act-status _orange'>ТО1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}