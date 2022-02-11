<script setup lang="ts">
import Card from './Card.vue';
import Badge from './Badge.vue';
</script>

<template>
  <div class="container">
    <Card class="badges-card">
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

    <Card class="reservation-card">
      <span>John Wick</span>
      <Badge class="vip-badge">
        <span>VIP</span>
      </Badge>
    </Card>
    <Card class="reservation-card">
      <span>Shuya Inada</span>
      <Badge class="normal-badge">
        <span>Normal</span>
      </Badge>
    </Card>
    <Card class="reservation-card">
      <span>Silver Leilly</span>
      <Badge class="vip-badge">
        <span>VIP</span>
      </Badge>
    </Card>
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
