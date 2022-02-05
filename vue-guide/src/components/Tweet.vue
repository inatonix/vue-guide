<script setup lang="ts">
import { ref, watch } from 'vue'
const tweets = ref([{ id: 0, description: 'Hello, world!' }, { id: 1, description: 'This is the second tweet.' }])
const filteredTweets = ref(tweets.value)
const inputtingDescription = ref<string>('')
const selectedCondition = ref<number>(10000)

const postTweet = () => {
  const tweet = { id: Math.random(), description: inputtingDescription.value }
  tweets.value.push(tweet)
  inputtingDescription.value = ''
}

const deleteTweet = (id: number) => {
  tweets.value = tweets.value.filter(v => v.id !== id)
}

watch(selectedCondition, () => {
  filteredTweets.value = tweets.value.filter(v => v.description.length < selectedCondition.value)
})

</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <div class="form-container">
      <input v-model="inputtingDescription" />
      <button class="save-button" @click="postTweet">post</button>
    </div>
    <select v-model="selectedCondition" class="filtering-select">
      <option value="10">under 10</option>
      <option value="20">under 20</option>
      <option value="30">under 30</option>
    </select>
    <div>
      <li v-for="tweet in filteredTweets" class="tweet-list">
        <label>{{ tweet.description }}</label>
        <button @click="deleteTweet(tweet.id)" class="delete-button">delete</button>
      </li>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 24px 0;
  width: 60%;
  margin-bottom: 12px;
  border-radius: 4px;
}

.save-button {
  color: #fff;
  font-weight: bold;
  background-color: #68c9c9;
  border-radius: 2px;
  border: none;
  width: 60px;
  height: 22px;
}

.filtering-select {
  margin-bottom: 8px;
}

.save-button:hover {
  background-color: #3cafaf;
}

.delete-button {
  color: #fff;
  background-color: #c98768;
  border-radius: 2px;
  border: none;
}

.delete-button:hover {
  background-color: #b66843;
}

input {
  margin-bottom: 16px;
}

.tweet-list {
  list-style: none;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(203, 223, 240);
  border-radius: 4px;
  padding: 8px 20px;
  width: 300px;
}
</style>