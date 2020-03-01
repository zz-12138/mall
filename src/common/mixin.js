import { debounce } from "./utils"

export const itemListenerMixin = {
    data() {
        return {
            newRefresh: null,
            isShow: false
        }
    },
    mounted() {
        // 刷新滚动条
        this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
    },
    methods: {
        //回到顶部
        topClick() {
            this.$refs.scroll.scrollTo(0, 0);
        }
    }
}