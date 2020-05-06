import Vue from 'vue'
import './plugins/vuetify'
import './plugins/axios'
import App from './App.vue'
import Routes from './router'
import store from './store/Store'
Vue.config.productionTip = false
Vue.filter('currency',value =>{
	return 'R$ '+ value.toLocaleString()
})
new Vue({
	el:'#app',
	router : Routes,
	store,
	render: h => h(App),
})
