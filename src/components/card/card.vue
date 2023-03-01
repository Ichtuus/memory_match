<script setup lang="ts">
import { ref, onMounted } from 'vue'

const fruitArray = [
  { url: '../../../src/assets/fruits/ace.jpg', name: 'Ace' },
  { url: '../../../src/assets/fruits/baggy.jpg', name: 'Baggy' },
  { url: '../../../src/assets/fruits/barbeblanche.jpg', name: 'Barbe blanche' },
  { url: '../../../src/assets/fruits/chopper.jpg', name: 'Chopper' },
  { url: '../../../src/assets/fruits/doflamingo.jpg', name: 'Doflamingo' },
  { url: '../../../src/assets/fruits/kaku.jpg', name: 'Kaku' },
  { url: '../../../src/assets/fruits/kalifa.jpg', name: 'Kalifa' },
  { url: '../../../src/assets/fruits/law.jpg', name: 'Law' },
  { url: '../../../src/assets/fruits/luffy.jpg', name: 'Luffy' },
  { url: '../../../src/assets/fruits/teach.jpg', name: 'Teach' }
]

let showSide = false

onMounted(() => {})

function testshow(e: any) {
  console.log('event', e)
}
</script>

<template>
  <div class="ds-container">
    <div class="ds-flex">
      <div
        v-for="(fruit, index) in fruitArray"
        :key="index"
        class="ds-col__12-s ds-col__3-l card__body"
      >
        <div class="card__body-img" @click="testshow()">
          <figure>
            <img
              :alt="fruit.name"
              :src="showSide ? fruit.url : '../../../src/assets/pngegg.png'"
              height="322"
              width="270"
            />
            <figcaption>{{ fruit.name }}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card__body {
  &-img {
    width: fit-content;
    box-shadow: 2px -2px 5px 1px;
    border: 1px solid #194ecc;
  }
}
</style>
