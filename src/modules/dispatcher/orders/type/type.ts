import { ReactNode } from "react"

export type StatisticsType = {
    name: string,
    value: string,
    color: string,
}
export type TtemsRequestRegistryType = {
    name: string,
    id: string,
    texts: ReactNode[],
    status: {
        name: string,
        color: string,
    }[],
    time: string,
    progress: string,
}