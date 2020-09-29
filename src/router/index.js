import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@views/Home.vue'
import Time from '@views/Time.vue'
import Travel from '@views/Travel.vue'
import Lang from '@views/Lang.vue'
import Draw from '@views/Draw.vue'
import Life from '@views/Life.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/time',
    name: 'Time',
    component: Time
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/lang',
    name: 'Lang',
    component: Lang
  },
  {
    path: '/draw',
    name: 'Draw',
    component: Draw
  }, 
  {
    path: '/life',
    name: 'Life',
    component: Life
  },
]

const router = new VueRouter({
  routes
})

export default router
