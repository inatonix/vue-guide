import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import UserList from './components/UserList.vue'
import ReservationList from './components/ReservationList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/users', component: UserList },
    { path: '/reservations', component: ReservationList }
  ]
})

createApp(App).mount('#app')
