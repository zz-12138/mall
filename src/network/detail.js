import {request} from './request'

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

// 商品类
export class Goods {
    constructor(itemInfo, columns, service) {
        this.desc = itemInfo.desc;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.service = service;
    }
}

// 店铺类
export class Shop {
    constructor(shopInfo,score) {
        this.shopLogo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.cFans = shopInfo.cFans;
        this.cGoods = shopInfo.cGoods;
        this.score = score;
    }
}

//商品规格类
export class Sku {
    constructor(skuInfo) {
        this.tree = skuInfo.props
        this.list = skuInfo.skus
        this.price = skuInfo.defaultPrice.replace('¥','')
        this.stock_num = skuInfo.totalStock
    }
}

