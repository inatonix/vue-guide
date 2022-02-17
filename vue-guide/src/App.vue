<script setup lang="ts">
import TodoList from './components/TodoList.vue';
import { inject, InjectionKey, provide, ref } from "vue";
import { todos, todoKey } from './useTodo'

// provide('todos', todos)
provide(todoKey, todos)

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
