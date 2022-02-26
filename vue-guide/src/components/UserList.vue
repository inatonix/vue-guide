<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <span>{{ user.name }}</span>
    </li>
  </ul>
</template>
<script setup lang="ts">
type User = {
  id: string,
  name: string,
}

type Props = {
  users: User[]
}


const props = defineProps<Props>()
console.log('users is ', props.users)

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