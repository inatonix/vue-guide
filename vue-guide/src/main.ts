import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import UserList from './components/UserList.vue'
import UserDetail from './components/UserDetail.vue'
import ReservationList from './components/ReservationList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/users', component: UserList },
    { path: '/users/:id', component: UserDetail },
    { path: '/reservations', component: ReservationList }
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
