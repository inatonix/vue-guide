<script setup lang="ts">
import { defineProps } from 'vue';

type Props = {
  id: string,
  description: string,
}

const props = defineProps<Props>()

</script>

<template>
  <div class="card">
    <label>{{ props.description }}</label>
    <button>delete</button>
  </div>
</template>

<style scoped>
.card {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(205, 220, 233);
  border-radius: 4px;
  padding: 8px 20px;
  width: 300px;
}

button {
  color: #fff;
  background-color: #c98768;
  border-radius: 2px;
  border: none;
}

button:hover {
  background-color: #c17857;
}
</style>