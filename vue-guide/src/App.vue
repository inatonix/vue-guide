<script setup lang="ts">
import { provideTodos } from './components/useTodo';
import TodoList from './components/TodoList.vue';

provideTodos()
</script>

<template>
  <TodoList />
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
