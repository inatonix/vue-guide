<script setup lang="ts">
import { Ref, ref } from 'vue'
import PersonList from './PersonList.vue';
import PersonPostForm from './PersonPostForm.vue';

export type Person = {
  id: number,
  name: string,
  age: number,
}

const persons: Ref<Person[]> = ref([{ id: 0, name: 'John', age: 24 }, { id: 1, name: 'Mike', age: 27 }])
const registerPerson = (person: Person) => {
  persons.value.push(person)
}
const deletePerson = (id: number) => {
  persons.value = persons.value.filter(p => p.id !== id)
}

</script>

<template>
  <div class="container">
    <PersonPostForm @register="registerPerson" />
    <div class="list-container">
      <p v-if="persons.length <= 0">No Person here</p>
      <ul v-else>
        <PersonList :persons="persons" @delete="deletePerson" />
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

.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(253, 249, 243);
  padding: 24px 0;
  width: 60%;
  margin-bottom: 12px;
  border-radius: 4px;
}
</style>