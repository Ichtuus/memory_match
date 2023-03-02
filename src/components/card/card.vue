<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'

type Card = { url: string; name: string; show: boolean }[]

const maxSelectedCard = 2

let fruitArray: Card = [
  { url: '../../../src/assets/fruits/ace.jpg', name: 'Ace', show: false },
  { url: '../../../src/assets/fruits/ace.jpg', name: 'Ace', show: false },
  { url: '../../../src/assets/fruits/baggy.jpg', name: 'Baggy', show: false },
  { url: '../../../src/assets/fruits/baggy.jpg', name: 'Baggy', show: false },
  { url: '../../../src/assets/fruits/barbeblanche.jpg', name: 'Barbe blanche', show: false },
  { url: '../../../src/assets/fruits/barbeblanche.jpg', name: 'Barbe blanche', show: false },
  { url: '../../../src/assets/fruits/chopper.jpg', name: 'Chopper', show: false },
  { url: '../../../src/assets/fruits/chopper.jpg', name: 'Chopper', show: false },
  { url: '../../../src/assets/fruits/doflamingo.jpg', name: 'Doflamingo', show: false },
  { url: '../../../src/assets/fruits/doflamingo.jpg', name: 'Doflamingo', show: false },
  { url: '../../../src/assets/fruits/kaku.jpg', name: 'Kaku', show: false },
  { url: '../../../src/assets/fruits/kaku.jpg', name: 'Kaku', show: false },
  { url: '../../../src/assets/fruits/kalifa.jpg', name: 'Kalifa', show: false },
  { url: '../../../src/assets/fruits/kalifa.jpg', name: 'Kalifa', show: false },
  { url: '../../../src/assets/fruits/law.jpg', name: 'Law', show: false },
  { url: '../../../src/assets/fruits/law.jpg', name: 'Law', show: false },
  { url: '../../../src/assets/fruits/luffy.jpg', name: 'Luffy', show: false },
  { url: '../../../src/assets/fruits/luffy.jpg', name: 'Luffy', show: false },
  { url: '../../../src/assets/fruits/teach.jpg', name: 'Teach', show: false },
  { url: '../../../src/assets/fruits/teach.jpg', name: 'Teach', show: false }
]

let selectedCard = ref(0)
let countSelectedCard = 0

function selectFruit(event: any) {
  if (event.target) {
    const { cardindex } = event.target?.dataset
    console.log('cardindex', cardindex)
    selectedCard.value = cardindex
    countSelectedCard += 1
    updateFruitArray(cardindex)
  }
}

function updateFruitArray(indexcard: number) {
  if (countSelectedCard != maxSelectedCard) {
    fruitArray.forEach((fruit) => (fruit.show = false))
  } else {
    countSelectedCard = 0
  }

  const element = fruitArray.find((fruit, index) => index == indexcard)

  if (element) {
    element.show = true
  }
}

onMounted(() => {
  fruitArray.sort(() => Math.random() - 0.5)
})
</script>

<template>
  <div class="ds-container">
    <div class="ds-flex">
      <div
        v-for="(fruit, index) in fruitArray"
        :key="index"
        class="ds-col__12-s ds-col__3-l card__body"
      >
        <div
          class="card__body-img"
          :class="{ selected: selectedCard === index }"
          @click="selectFruit"
        >
          <figure>
            <img
              :data-cardindex="index"
              :alt="fruit.name"
              :src="fruit.show ? fruit.url : '../../../src/assets/pngegg.png'"
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
