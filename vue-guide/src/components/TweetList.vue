<script setup lang="ts">

type Tweet = {
  id: number,
  description: string,
}

type Props = {
  tweets: Tweet[],
}

defineProps<Props>()
const emit = defineEmits(['delete'])

const onClickButton = (id: number) => {
  emit('delete', id)
}
</script>

<template>
  <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
    <span>{{ tweet.description }}</span>
    <button @click="onClickButton(tweet.id)" class="delete-button">delete</button>
  </li>
</template>

<style scoped>
.tweet-list {
  list-style: none;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(204, 219, 233);
  padding: 8px 20px;
  width: 300px;
}
</style>