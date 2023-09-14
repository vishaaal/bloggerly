import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://bloggerlyweb.onrender.com/api"
})