import instance from "@/core/network/api";
import { MunicipalityRoutes} from "@/core/network/api-routes";

export type Municipality = {
    id: number,
    name: string
}

export const getAllMunicipalities = () => {
    return instance.get(MunicipalityRoutes.GetAll)
}
