import http from './http.js'

export function register(name,pwd) {
    return http.post("/user/register", {
        loginName: name,
        password:pwd
    })
}