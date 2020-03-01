import { request } from './request'

// 封装home页网络请求
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

//封装home页商品列表
export function getHomeGoodslist(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}