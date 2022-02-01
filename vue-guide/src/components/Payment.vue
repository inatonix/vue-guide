<script setup lang="ts">
import { ref } from 'vue'

const itemName1 = 'Desk'
const price1 = 40000
const itemName2 = 'Bike'
const url1 = 'https://www.amazon.co.jp/CJMM-%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B9%E3%83%87%E3%82%B9%E3%82%AF%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB-L%E5%AD%97%E5%9E%8B%E3%82%B3%E3%83%BC%E3%83%8A%E3%83%BC%E3%83%87%E3%82%B9%E3%82%AF%E3%83%91%E3%82%BD%E3%82%B3%E3%83%B3%E5%8F%B0%E4%BB%98%E3%81%8D-PC%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%87%E3%82%B9%E3%82%AF-150cmx120cm/dp/B09JNX2H8X/ref=sr_1_1_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=284QTUKGPHKI5&keywords=desk&qid=1643676018&sprefix=desk%2Caps%2C164&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFPR1FHU0xORThHTEkmZW5jcnlwdGVkSWQ9QTA4MjY2ODYxT1hUNFRFWUQ2VkVBJmVuY3J5cHRlZEFkSWQ9QTNUODVCSVZFT0s5SjEmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl'

const buy = (itemName: string) => {
  alert('Are you sure to buy ' + itemName + '?')
}

const inp = (e: any) => {
  console.log('インプッティング', e.target.value)
}

// const plus = () => {
//   price1 += 1
// }

</script>

<template>
  <div class="container">
    <h1>Payment</h1>
    <input @input="inp" />
    <div class="payment">
      <label>{{ itemName1 }}</label>
      <label>{{ price1 }} yen</label>
      <button @click="buy(itemName1)">buy</button>
      <a v-bind:href="url1">bought at...</a>
    </div>
    <div class="payment">
      <label>{{ itemName2 }}</label>
      <label>400,000 yen</label>
      <button @click="buy(itemName2)">buy</button>
      <a v-bind:href="url1">bought at...</a>
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
  height: 80px;
  width: 400px;
  background-color: aliceblue;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}
</style>