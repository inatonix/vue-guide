<script setup lang="ts">
const tweets = [{ id: '0', description: 'Hello, world!' }, { id: '1', description: 'This is the second tweet.' }]


</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <div class="form-container">
      <input />
      <button class="save-button">post</button>
    </div>
    <div class="tweet-container">
      <li v-for="tweet in tweets" class="tweet-list">
        <label>{{ tweet.description }}</label>
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

label {
  font-size: 20px;
  font-weight: bold;
}

.tweet-list {
  list-style: none;
  background-color: rgb(205, 220, 233);
  margin-bottom: 12px;
  border-radius: 4px;
}
</style>