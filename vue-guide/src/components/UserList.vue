<template>
  <div class="container">
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="'/users/' + user.id">
          <span>{{ user.name }}</span>
        </router-link>
      </li>
    </ul>
    <div class="detail-view">
      <router-view></router-view>
    </div>
    <button @click="onClickMove">Move to Reservation</button>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

type User = {
  id: string,
  name: string,
}


const users: User[] = [{ id: '1', name: 'John' }, { id: '2', name: 'Michael' }]

const router = useRouter()
const onClickMove = () => {
  router.push('/reservations')
}

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.detail-view {
  background-color: rgb(202, 228, 202);
  margin-bottom: 20px;
}

ul {
  list-style: none;
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