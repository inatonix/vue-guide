<script setup lang="ts">
import { ref, reactive } from 'vue'
import TweetCard from './TweetCard.vue';
const tweets = reactive([{ id: 0, description: 'Hello, world!' }, { id: 1, description: 'This is the second tweet.' }])
const inputtingDescription = ref<string>('')

const postTweet = () => {
  const tweet = { id: Math.random(), description: inputtingDescription.value }
  tweets.push(tweet)
  inputtingDescription.value = ''
}

</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <div class="form-container">
      <input v-model="inputtingDescription" />
      <button class="save-button" @click="postTweet">post</button>
    </div>
    <div>
      <li v-for="tweet in tweets" class="tweet-list">
        <TweetCard :id="tweet.id" :description="tweet.description" />
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

button {
  color: #fff;
  font-weight: bold;
  background-color: #68c9c9;
  border-radius: 2px;
  border: none;
  width: 60px;
  height: 22px;
}

button:hover {
  background-color: #37bdbd;
}

input {
  margin-bottom: 16px;
}

.tweet-list {
  list-style: none;
  margin-bottom: 12px;
  border-radius: 4px;
}
</style>