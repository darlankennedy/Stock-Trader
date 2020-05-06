import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/Stocks'
import Portfolio from './modules/Portfolio'
import actions from './actions'
Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules:{
        stocks,

        Portfolio
    }
})
