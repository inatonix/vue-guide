<script setup lang="ts">
</script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 4px 4px 4px rgb(218, 218, 218);
  border-radius: 8px;
  padding: 20px 20px;
}
</style>