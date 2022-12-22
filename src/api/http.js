import axios from 'axios'
let http = axios.create({
    baseURL: "http://backend-api-01.newbee.ltd/api/v1/",
    timeout: 8000
})


http.interceptors.request.use(config => {
  
 

    return config;
}, err => {
    return Promise.reject(err)
})


http.interceptors.response.use(response => {



    return response.data;
}, err => {
    return Promise.reject(err)
})


export default http