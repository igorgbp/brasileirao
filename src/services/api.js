import axios from "axios"

const api = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + import.meta.env.VITE_TEST_KEY
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