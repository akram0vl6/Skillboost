import { api } from "./base";

export const questionsApi = {
    getByTech: (queryParams) => api.get('/questionsTech', { params: queryParams })
}