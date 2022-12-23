import axios from 'axios'
import {
    Notify
} from "vant"

let http = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'http://backend-api-01.newbee.ltd/api/v1/' : '/api/v1',
    timeout: 8000
})


http.interceptors.request.use(config => {
  
    config.headers.token = localStorage.getItem("mltoken")

    return config;
}, err => {
    return Promise.reject(err)
})


http.interceptors.response.use(response => {
    let data = response.data;
    return data;
}, err => {
    Notify({
        type: "danger",
        message: "系统繁忙,稍后再试"
    })
    return Promise.reject(err)
})


export default http