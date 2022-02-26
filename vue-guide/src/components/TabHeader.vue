<template>
  <header>
    <nav>
      <ul>
        <router-link to="/reservations">
          <button @click="emits('set-page', 'reservation-list')">Reservations</button>
        </router-link>
        <router-link to="/users">
          <button @click="emits('set-page', 'user-list')">Users</button>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const emits = defineEmits(['set-page'])

const getURL = () => {
  return Math.random() > 0.5 ? '/reservations' : '/users'
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

button {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

button:hover,
button:active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>