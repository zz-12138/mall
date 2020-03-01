import { request } from './request'

//请求category数据
export function getCategory() {
    return request({
        url: '/category'
    })
}