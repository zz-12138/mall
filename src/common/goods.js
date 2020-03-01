export const goods = {
    tree: [
        {
            k: '颜色', // skuKeyName：规格类目名称
            v: [
                {
                    id: '30349', // skuValueId：规格值 id
                    name: '红色', // skuValueName：规格值名称
                    
                },
                {
                    id: '1215',
                    name: '蓝色',
                    
                }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
        },
        {
            k: '尺码', // skuKeyName：规格类目名称
            v: [
                {
                    id: '30349', // skuValueId：规格值 id
                    name: 'S', // skuValueName：规格值名称
                },
                {
                    id: '1215',
                    name: 'M'
                }
            ],
            k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
        }
    ],
    // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
    list: [
        {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            stock_num: 110 // 当前 sku 组合对应的库存
        }
    ],
    price: '1.00', // 默认价格（单位元）
    stock_num: 227, // 商品总库存
}