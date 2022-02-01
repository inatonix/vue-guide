<script setup lang="ts">
</script>

<template>
  <div class="container">
    <h1>最近の支出</h1>
    <div class="payment">
      <h2>カレーライス</h2>
      <h3>400円</h3>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.payment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  background-color: aliceblue;
  padding-left: 20px;
  padding-right: 20px;
}
</style>