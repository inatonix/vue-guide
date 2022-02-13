<script setup lang="ts">
import { ref } from 'vue'
import Card from './Card.vue';
import Badge from './Badge.vue';
import MosaicReservation from './MosaicReservation.vue';
import ReservationList from './ReservationList.vue';

const isListVisible = ref<boolean>(true)
const onClickButton = () => {
  isListVisible.value = !isListVisible.value
}

const getContent = () => {
  if (isListVisible.value) {
    return ReservationList
  } else {
    return MosaicReservation
  }
}

</script>

<template>
  <div class="container">
    <Card class="menu-card">
      <span>Badges</span>
      <div class="badges">
        <Badge class="vip-badge">
          <span>VIP</span>
        </Badge>
        <Badge class="normal-badge">
          <span>NORMAL</span>
        </Badge>
      </div>
    </Card>
    <component :is="getContent()" />
    <!-- <div v-if="isListVisible">
      <ReservationList />
    </div>
    <div v-else>
      <MosaicReservation />
    </div>
    -->
    <button @click="onClickButton">Change</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-card {
  width: 300px;
  height: 80px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.badges {
  display: flex;
  justify-content: space-between;
  width: 60%;
}

.vip-badge {
  background-color: #810036;
  color: white;
}

.normal-badge {
  background-color: #002c8a;
  color: white;
}

.reservation-card {
  width: 400px;
  height: 60px;
  background-color: rgb(255, 212, 147);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgb(211, 211, 211);
}
</style>