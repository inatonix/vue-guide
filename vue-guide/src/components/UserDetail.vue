<template>
  user id is {{ userId }}
  <router-link to="/users/2">Move to User 2 detail</router-link>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const userId = ref(route.params['id'])

</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}

li {
  border-radius: 8px;
  background-color: rgb(191, 216, 216);
  padding: 20px 20px;
  margin-bottom: 20px;
}
</style>