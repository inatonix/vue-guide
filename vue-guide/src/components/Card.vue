<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  title: string,
}>();
</script>

<template>
  <div class="card">
    <span class="title">{{ title }}</span>
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 2, 8px, black;
  border-radius: 8px;
  padding: 20px 20px;
}

.title {
  font-size: 20px;
  font-weight: 600;
}
</style>