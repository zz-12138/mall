module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-px-to-viewport': {
            viewportWidth: 375, //视窗的宽度，对应设计稿的宽度，
            viewportHeight: 667, //视窗的高度，对应设计稿的高度（可以不写）,
            unitPrecision: 5, //指定px转换为视窗单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw', //指定要转换的视角单位，建议vm
            selectorBlackList: [], //指定不需要转换的类
            minPixelValue: 1, //小于等于1px不转换视窗单位
            mediaQuery: false, //媒体查询
        }
    }
}