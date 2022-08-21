import AssignmentCalendarVue from '@/AssignmentCalendar.vue'
import ClassCalendarVue from '@/ClassCalendar.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/AssignmentSchedule",
      name:"Assignment Schedule",
      component:AssignmentCalendarVue
    },
    {
      path:"/ClassSchedule",
      name:"Class Schedule",
      component:ClassCalendarVue
    }
  ]
})

export default router
