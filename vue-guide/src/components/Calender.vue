<script setup lang="ts">
import Card from './Card.vue';
import Badge from './Badge.vue';

</script>

<template>
  <div>
    <h2>January</h2>
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
      <span>Silvers Leily</span>
      <Badge class="vip-badge">
        <span>VIP</span>
      </Badge>
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
      <span>Silvers Leily</span>
      <Badge class="vip-badge">
        <span>VIP</span>
      </Badge>
    </Card>
  </div>
</template>

<style scoped>
.badge {
  box-shadow: 0, 8px, black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 44px;
}
</style>