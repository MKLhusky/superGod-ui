import { createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login.vue'
import DailyAttendance from "../views/DailyAttendance.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/DailyAttendance',
      name: 'DailyAttendance',
      component: DailyAttendance
    }
  ]
})

export default router
