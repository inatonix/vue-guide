<template>
  <ul>
    <li
      v-for="reservation in reservations"
      :key="reservation.id"
    >{{ reservation.title }} {{ reservation.date.toISOString() }}</li>
  </ul>
</template>

<script setup lang="ts">
type Reservation = {
  id: string,
  title: string,
  date: Date,
}

const reservations: Reservation[] = [{ id: '1', title: 'Restaurant', date: new Date() }]

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

span {
  font-size: 20px;
}
</style>