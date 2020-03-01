import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    cartList: []
}

const mutations = {
    addToCart(state, payload) {
        payload.checked = false
        state.cartList.push(payload)
    },
    addCount(state, payload) {
        state.cartList[payload].selectedNum++
    },
    removeCount(state, payload) {
        if (state.cartList[payload].selectedNum) {
            state.cartList[payload].selectedNum--
        }
    }
}

const actions = {
    addCartList(context, payload) {
        let oldCartList = null;
        for (let item of context.state.cartList) {
            if (item.id === payload.id) {
                oldCartList = item;
                item.selectedNum += payload.selectedNum
            }
        }

        if (!oldCartList) {
            context.commit('addToCart', payload)
        }
    }
}

const getters = {
    cartList(state) {
        return state.cartList
    }
}

// 创建对象
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})

export default store