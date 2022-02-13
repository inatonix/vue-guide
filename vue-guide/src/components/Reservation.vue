<script setup lang="ts">
import { ref, computed } from 'vue'
import Card from './Card.vue';
import Badge from './Badge.vue';
import Calender from './Calender.vue';
import MosaicCalendar from './MosaicCalendar.vue';

const badgeName = 'VIP'

const isDialogOpen = ref<boolean>(false)
const isMonthly = ref<boolean>(true)
const calendar = computed(() => {
  console.log('computed')
  return isMonthly.value ? Calender : MosaicCalendar
}
)
const onClickButton = () => {
  isDialogOpen.value = !isDialogOpen.value
  // isMonthly.value = !isMonthly.value
  console.log('monthly ', isMonthly.value)
}


</script>

<template>
  <div class="container">
    <Card class="badges-card">
      <span>Badges</span>
      <div class="badges">
        <Badge class="vip-badge">
          <span>{{ badgeName }}</span>
        </Badge>
        <Badge class="normal-badge">
          <span>NORMAL</span>
        </Badge>
      </div>
    </Card>
    <teleport to="body">
      <dialog class="dialog" :open="isDialogOpen">
        <span>Dialog</span>
      </dialog>
    </teleport>
    <component :is="calendar" />
    <button @click="onClickButton">Change</button>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.badges-card {
  width: 300px;
  height: 80px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 300px;
  width: 400px;
  margin: auto;
  background-color: gray;
}

.reservation-card {
  width: 400px;
  height: 60px;
  background-color: rgb(255, 212, 147);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.vip-badge {
  background-color: #810036;
  color: white;
}

.normal-badge {
  background-color: #002c8a;
  color: white;
}

.badges-card span {
  font-size: 32px;
  font-weight: bold;
}

.vip-badge span {
  font-size: 20px;
  font-weight: bold;
}

.normal-badge span {
  font-size: 14px;
  font-weight: bold;
}

.badges {
  display: flex;
  justify-content: space-between;
  width: 60%;
}
</style>