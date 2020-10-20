import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Keys from '../views/Keys.vue'

Vue.use(VueRouter)

const routes = [
	{
	path: '/',
	name: 'Home',
	component: Home
	},
	{
	path: '/keys',
	name: 'Keys',
	component: Keys
	}
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
