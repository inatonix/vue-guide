<template>
  <tab-header @set-page="setActiveTab"></tab-header>
  <div class="background">
    <component :is="activeTab" :users="users" :reservations="reservations"></component>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserList from './components/UserList.vue';
import TabHeader from './components/TabHeader.vue'
import ReservationList from './components/ReservationList.vue'

const activeTab = ref()
const setActiveTab = (updated: string) => {
  const getActive = () => {
    switch (updated) {
      case 'user-list':
        return UserList
      case 'reservation-list':
        return ReservationList
    }
  }
  activeTab.value = getActive()
}

const users = [{ id: '1', name: 'John' }, { id: '2', name: 'Michael' }]
const reservations = [{ id: '1', title: 'Restaurant', date: new Date() }]


</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.background {
  display: flex;
}
</style>