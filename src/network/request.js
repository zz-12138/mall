import axios from 'axios'

// 封装总网络请求
export function request(config) {

    // 创建axios实例
    const instance  = axios.create({
        // baseURL: "http://123.207.32.32:8000/api/wh",
        baseURL: "http://106.54.54.237:8000/api/wh",
        timeout: 10000
    })

    // axios拦截器(拦截请求)
    instance.interceptors.request.use(res => {
        // console.log(config)
        return res
    }, err => {
        console.log(err)
    })

    // 拦截响应
    instance.interceptors.response.use(res => {
        // console.log(config)
        return res.data
    }, err => {
        console.log(err)
    })

    return instance(config)
}