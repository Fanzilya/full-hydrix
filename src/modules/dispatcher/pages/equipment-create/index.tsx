import { Icon } from "@/shared/ui/icon"
import { InputContainer } from "@/shared/ui/Inputs/input-container"
import { Input } from "@/shared/ui/Inputs/input-text"
import { equipmentCreateModel } from "./model/equipment-create-model"
import { observer } from "mobx-react-lite"
import { Button } from "@/shared/ui/button"
import { useCharacteristics } from "./components/characteristic/hook"
import { Link, useNavigate } from "react-router-dom"


export const EquipmentCreate = observer(() => {

    const navigate = useNavigate();

    const { model, imgPreview, setName, setImg, setCategory, setModel, setSupplier, setManufacturer, setPosition, create } = equipmentCreateModel

    const {
        characteristics,
        addCharacteristic,
        removeCharacteristic,
        updateCharacteristicName,
        updateCharacteristicValue,
        getCharacteristics
    } = useCharacteristics();

    const handleAddCharacteristic = () => {
        addCharacteristic();
    };

    const handleRemoveCharacteristic = (id: string) => {
        removeCharacteristic(id);
    };

    const handleNameChange = (id: string, value: string) => {
        updateCharacteristicName(id, value);
    };

    const handleValueChange = (id: string, value: string) => {
        updateCharacteristicValue(id, value);
    };

    // Функция для отправки данных (пример)
    const handleSubmit = () => {
        create(characteristics.filter(
            char => char.name.trim() !== '' && char.value.trim() !== ''))
    };


    return (
        <div className="bg-white rounded-[20px] p-[45px_30px_50px_40px] mb-5 relative">
            <div>
                <div className="font-bold text-[34px] mb-[32px]">
                    Добавление оборудования
                </div>
                <div className="flex gap-[60px]">
                    <label className="w-[460px] h-[242px] rounded-lg bg-[#E6E9EF] gap-1 flex flex-col items-center justify-center hover:opacity-50 duration-300 cursor-pointer">
                        <input className="hidden" type="file" onChange={(e) => setImg(e)} />
                        {
                            imgPreview ?
                                <img src={imgPreview} className="w-full h-full object-cover" />
                                :
                                <>
                                    <Icon systemName="file-plus-blue" />
                                    <span className="text-[var(--clr-accent)] font-semibold">Загрузить фото</span>
                                </>
                        }
                    </label>

                    <div>
                        <div className="font-semibold text-[28px] mb-[32px]">
                            Общая информация
                        </div>

                        <div className="flex flex-wrap  gap-x-[20px] gap-y-[10px]">
                            <InputContainer
                                headerText="Название оборудования"
                                classNames={{
                                    wrapper: "w-[calc(50%_-_20px)]"
                                }}
                                children={
                                    <Input
                                        className="border-[1.5px] px-3 py-3 rounded-lg"
                                        type="text"
                                        placeholder="Название оборудования"
                                        value={model.name}
                                        onChange={setName}
                                    />
                                }
                            />
                            <InputContainer
                                headerText="Модель"
                                classNames={{
                                    wrapper: "w-[calc(50%_-_20px)]"
                                }}
                                children={
                                    <Input
                                        className="border-[1.5px] px-3 py-3 rounded-lg"
                                        type="text"
                                        placeholder="Модель"
                                        value={model.model}
                                        onChange={setModel}
                                    />
                                }
                            />
                            <InputContainer
                                headerText="Категория"
                                classNames={{
                                    wrapper: "w-[calc(50%_-_20px)]"
                                }}
                                children={
                                    <Input
                                        className="border-[1.5px] px-3 py-3 rounded-lg"
                                        type="text"
                                        placeholder="Категория"
                                        value={model.category}
                                        onChange={setCategory}
                                    />
                                }
                            />
                            <InputContainer
                                headerText="Поставщик"
                                classNames={{
                                    wrapper: "w-[calc(50%_-_20px)]"
                                }}
                                children={
                                    <Input
                                        className="border-[1.5px] px-3 py-3 rounded-lg"
                                        type="text"
                                        placeholder="Поставщик"
                                        value={model.supplier}
                                        onChange={setSupplier}
                                    />
                                }
                            />
                            <InputContainer
                                headerText="Производитель"
                                classNames={{
                                    wrapper: "w-[calc(50%_-_20px)]"
                                }}
                                children={
                                    <Input
                                        className="border-[1.5px] px-3 py-3 rounded-lg"
                                        type="text"
                                        placeholder="Производитель"
                                        value={model.manufacturer}
                                        onChange={setManufacturer}
                                    />
                                }
                            />
                            <InputContainer
                                headerText="Расположение"
                                classNames={{
                                    wrapper: "w-[calc(50%_-_20px)]"
                                }}
                                children={
                                    <Input
                                        className="border-[1.5px] px-3 py-3 rounded-lg"
                                        type="text"
                                        placeholder="Расположение"
                                        value={model.position}
                                        onChange={setPosition}
                                    />
                                }
                            />
                        </div>
                    </div>

                </div>
                <div className="mt-20">
                    <div className="font-semibold text-[28px] mb-[12px]">
                        Характеристики
                    </div>
                    <Button
                        onClick={handleAddCharacteristic}
                        class="text-white bg-[var(--clr-accent)] hover:opacity-50 px-4 gap-3">
                        <Icon systemName="plus-circle-white" />
                        <span>Добавить характеристики</span>
                    </Button>
                    <div className="bg-[#E6E9EF] h-1 w-[757px] rounded my-10 "></div>
                    <div className="flex flex-col gap-5">
                        {characteristics.map((characteristic, index) => (
                            <div
                                key={characteristic.id}
                                className="flex gap-3 items-end animate-fade-in"
                            >
                                <InputContainer
                                    headerText="Название характеристики"
                                    classNames={{
                                        wrapper: "w-[500px]"
                                    }}
                                    children={
                                        <input
                                            className="border-[1.5px] px-3 py-3 rounded-lg w-full outline-none focus:border-[var(--clr-accent)] transition-colors duration-200"
                                            type="text"
                                            placeholder="Название характеристики"
                                            value={characteristic.name}
                                            onChange={(e) => handleNameChange(characteristic.id, e.target.value)}
                                        />
                                    }
                                />

                                <InputContainer
                                    headerText="Значение"
                                    classNames={{
                                        wrapper: "w-[500px]"
                                    }}
                                    children={
                                        <input
                                            className="border-[1.5px] px-3 py-3 rounded-lg w-full outline-none focus:border-[var(--clr-accent)] transition-colors duration-200"
                                            type="text"
                                            placeholder="Значение"
                                            value={characteristic.value}
                                            onChange={(e) => handleValueChange(characteristic.id, e.target.value)}
                                        />
                                    }
                                />

                                {/* Кнопка удаления */}
                                <div
                                    className={`border-2 rounded-lg w-[45px] h-[45px] cursor-pointer hover:opacity-50 duration-300 mb-1 flex items-center justify-center transition-all border-[var(--clr-accent)] hover:bg-red-50`}
                                    onClick={() => characteristics.length > 1 && handleRemoveCharacteristic(characteristic.id)}
                                    title={characteristics.length <= 1 ? "Нельзя удалить последнюю характеристику" : "Удалить характеристику"}
                                >
                                    <Icon systemName="trash-blue" />
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="flex gap-4 mt-10">
                        <Button class="rounded-lg px-10 bg-[var(--clr-accent)] text-white hover:opacity-50" onClick={handleSubmit}>Сохранить</Button>
                        <Button class="rounded-lg px-10 border border-[var(--clr-accent)] text-[var(--clr-accent)] hover:opacity-50" onClick={() => navigate(-1)}>Отменить</Button>
                    </div>


                </div>
            </div>
        </div>
    )
})