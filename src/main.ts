import { createApp } from 'vue'
import router from './router'
import AssignmentCalendar from './AssignmentCalendar.vue'
import ClassCalendarVue from './ClassCalendar.vue'

const app = createApp(ClassCalendarVue)

app.use(router)

app.mount('#app')