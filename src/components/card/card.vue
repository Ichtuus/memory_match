<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

interface Fruit {
  url: string
  name: string
  show: boolean
}

type FruitList = Array<Fruit>

let fruitArray: FruitList = [
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
let countSelectedCard: number = 0
const maxSelectedCard: number = 2
let selected: string[] = []
let youWin: boolean = false

function selectFruit(event: any) {
  if (event.target) {
    const { cardindex } = event.target?.dataset
    const { nameof } = event.target?.dataset
    selected.push(nameof)
    selectedCard.value = cardindex
    countSelectedCard += 1
    updateFruitArray(cardindex)

    youWin = new Set(selected).size !== selected.length

    if (selected.length >= 2) {
      selected = []
      if (youWin) {
        console.log('win')
      }
    }
  }
}

function updateFruitArray(indexcard: number) {
  if (countSelectedCard != maxSelectedCard) {
    console.log(
      `select card count ${countSelectedCard} is NOT equal to max selectcard ${maxSelectedCard}`,
      'background: #222; color: #bada55'
    )
    fruitArray.forEach((fruit) => (fruit.show = false))
  } else {
    console.log(
      `select card count ${countSelectedCard} is equal to max selectcard ${maxSelectedCard} so reset value to 0`,
      'background: #222; color: #bada55'
    )
    countSelectedCard = 0
  }

  const element = fruitArray.find((fruit, index) => index == indexcard)

  if (element) {
    console.log(`display current card ${element.name}`, 'background: #222; color: #bada55')
    element.show = true
  }
}

onBeforeMount(() => {
  console.log('mounted')
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
          :class="{ selected: selectedCard == index }"
          @click="selectFruit"
        >
          <figure>
            <img
              :data-cardindex="index"
              :data-nameof="fruit.name"
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
