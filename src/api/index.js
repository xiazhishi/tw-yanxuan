import http from './http.js'
import md5 from 'js-md5';

export function register(name,pwd) {
    return http.post("/user/register", {
        loginName: name,
        password:pwd
    })
}

export function login(name, pwd) {
    return http.post("/user/login", {
        loginName:name,
        passwordMd5:md5(pwd)
    })
}

//获取首页面信息
export function indexinfo() {
    return http.get("/index-infos")
}