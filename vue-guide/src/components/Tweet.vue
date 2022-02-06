<script setup lang="ts">
import { ref } from 'vue'
import TweetList from './TweetList.vue';
import TweetPostForm from './TweetPostForm.vue';
const tweets = ref([{ id: 0, description: 'Hello, world!' }, { id: 1, description: 'this is the second tweet' }])

const postTweet = (description: string) => {
  const tweet = { id: Math.random(), description }
  tweets.value.push(tweet)
}

const deleteTweet = (id: number) => {
  tweets.value = tweets.value.filter(t => t.id !== id)
}
</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <TweetPostForm @post="postTweet" />
    <div class="tweet-container">
      <p v-if="tweets.length <= 0">No tweets have been added</p>
      <ul v-else>
        <TweetList :tweets="tweets" @delete="deleteTweet" />
      </ul>
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

.save-button {
  color: #fff;
  font-weight: bold;
  background-color: #68c9c9;
  border-radius: 2px;
  border: none;
  width: 60px;
  height: 22px;
}

.save-button:hover {
  background-color: #37bdbd;
}

.delete-button {
  color: #fff;
  font-weight: bold;
  background-color: #c99a68;
  border-radius: 2px;
  border: none;
  width: 60px;
  height: 22px;
}

.delete-button:hover {
  background-color: #ac783f;
}

input {
  margin-bottom: 16px;
}

label {
  font-size: 20px;
  font-weight: bold;
}
</style>