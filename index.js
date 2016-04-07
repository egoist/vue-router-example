import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app'

Vue.use(VueRouter)
const router = new VueRouter()
router.map({
	'/': {
		component: require('./views/home')
	},
	'/about': {
		component: require('./views/about')
	}
})

router.start(app, 'app')