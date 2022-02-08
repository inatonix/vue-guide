<script setup lang="ts">
import { computed, ref } from 'vue'
import { Person } from './Person.vue';
const inputtingName = ref<string>('')
const inputtingAge = ref<number>(0)

const nameLengthLimit = 15

const emit = defineEmits(['register'])

const register = () => {
  const person: Person = { id: Math.random(), name: inputtingName.value, age: inputtingAge.value }
  emit('register', person)
}

const isValidName = computed(() => {
  if (inputtingName.value.length >= nameLengthLimit) {
    return false
  } else {
    return true
  }
})

const color = computed(() => {
  return isValidName.value ? 'white' : 'rgb(244, 194, 190)';
})

</script>

<template>
  <div class="form-container">
    <div class="input-container">
      <div class="input-column">
        <span>name:</span>
        <input class="input-name" v-model="inputtingName" />
      </div>
      <span v-if="!isValidName">{{ nameLengthLimit }} characters or less, please.</span>
      <div class="input-column">
        <span>age:</span>
        <input type="number" class="input" v-model="inputtingAge" />
      </div>
    </div>
    <button class="save-button" @click="register()" :disabled="!isValidName">register</button>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 241, 226);
  padding: 24px 0;
  width: 40%;
  margin-bottom: 12px;
  border-radius: 4px;
}

.input-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 20px;
}

span {
  font-size: 12px;
  font-weight: bold;
}

.input-column {
  width: 160px;
  display: flex;
  justify-content: space-between;
}

.input-name {
  background-color: v-bind(color);
}

input {
  width: 100px;
}

.save-button {
  color: #fff;
  font-weight: bold;
  background-color: #e9bf71;
  border-radius: 2px;
  border: none;
  width: 80px;
  height: 22px;
}

.save-button:disabled {
  background-color: rgb(140, 140, 140);
  color: rgb(94, 94, 94);
}
</style>