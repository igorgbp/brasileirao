import axios from "axios"

const api = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'test_34fc4a84e402b8fdc84774de954f46'
    }
})

const brasileirao_id = 10

export const getCampeonato = async (page) => {
    try {
        const response = await api.get(`campeonatos/${brasileirao_id}/${page}`)
        console.log('resopnse',response)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}