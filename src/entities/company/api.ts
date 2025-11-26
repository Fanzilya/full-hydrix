export const getAllClientCompanies = () => {
    return instance.get(ClientCompanyRoutes.GetAll)
}
