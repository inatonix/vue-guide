<script setup lang="ts">
import { ref } from 'vue'
const inputtingDescription = ref<string>('')

const emit = defineEmits(['post'])
const postTweet = () => {
  emit('post', inputtingDescription.value)
  inputtingDescription.value = ''
}

</script>

<template>
  <div class="form-container">
    <input v-model="inputtingDescription" />
    <button class="save-button" @click="postTweet()">post</button>
  </div>
</template>

<style scoped>
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
  margin-top: 12px;
  background-color: #68c9c9;
  border-radius: 2px;
  border: none;
  width: 60px;
  height: 22px;
}
</style>