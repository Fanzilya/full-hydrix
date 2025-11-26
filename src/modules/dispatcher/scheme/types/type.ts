export type InformationsComponentsType = {
    title: string,
    img: string,
    items: InformationsType[]

}


export type InformationsType = {
    title: string,
    value: string
}


export type SchemeViewerType = {
    setInfo: (id: number) => void
}

export type SchemeViewerPointType = {
    top: string,
    left: string,
    size: [number, number],
    label: string,
    id: number
}



export type InfoCompType = {
    className: string,
    item: InformationsComponentsType,
    onClick: (id: number) => void
}