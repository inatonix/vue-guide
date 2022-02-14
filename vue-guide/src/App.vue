<script setup lang="ts">
import { todos } from './components/useTodo';
import TodoList from './components/TodoList.vue';
import { inject, InjectionKey, provide, ref } from "vue";

provide('todos', todos)

// import Reservation from './components/Reservation.vue';
</script>

<template>
  <TodoList />
  <!-- <Reservation></Reservation> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
