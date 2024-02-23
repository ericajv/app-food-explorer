import axios from "axios"

export const api = axios.create({
    baseURL: "https://api-food-explorer-bf76.onrender.com"
});