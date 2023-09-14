import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://bloggerlyapi.onrender.com/api/"
})