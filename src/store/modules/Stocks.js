import stocks from '../../data/stocks'
export default{
    state:{
        stocks:[]
    },
    mutations:{
        setStocks(state,stokcs){
            state.stocks = stokcs
        },
        randomizeStocks(state){
            state.stocks.forEach(stock =>{
                stock.price = Math.round(stock.price * (1+Math.random() - 0.42))
            })
        },
    },
    actions:{
        buyStock({commit},order){
            commit('buyStock',order)
        },
        initStocks({commit}){
            console.log('initStocks')
            commit('setStocks',stocks);
        },
        randomizeStocks({commit}){
            commit('randomizeStocks')
        }

    },
    getters:{
        stocks(state){
            return state.stocks
        }
    }
}