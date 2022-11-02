import axios from "axios";



const URL_API = 'https://pizzeria-back.onrender.com';


export const getPizzas = async () => {
    try {
        const {data} = await axios.get(`${URL_API}/pizzas`)
        return data;
    } catch (error) {
        return []
    }
}