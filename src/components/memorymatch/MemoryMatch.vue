<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue'
import { GamesStore } from '@/stores'

interface Fruit {
  url: string
  name: string
  show: boolean
}

type FruitList = Array<Fruit>
enum GamesE {
  MEMORY_MATCH = 'memoryMatch',
  WORD_MYSTERY = 'wordMystery'
}

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

let card = reactive({
  nbrOfSelectedCard: 0,
  countOfSelectedCard: 0,
  maxSelectedCard: 2,
  selectedCard: []
})

let youWin: boolean = false
const gameStore = GamesStore()

function selectFruit(event: any) {
  if (event.target) {
    const { cardindex } = event.target?.dataset
    const { nameof } = event.target?.dataset
    card.selectedCard.push(nameof)
    card.nbrOfSelectedCard = cardindex
    card.countOfSelectedCard += 1
    updateFruitArray(cardindex)

    youWin = new Set(card.selectedCard).size !== card.selectedCard.length

    if (card.selectedCard.length >= 2) {
      card.selectedCard = []
      if (youWin) {
        console.log('win')
        gameStore.updateGame(GamesE.MEMORY_MATCH, 1)
      }
    }
  }
}

function updateFruitArray(indexcard: number) {
  if (card.countOfSelectedCard != card.maxSelectedCard) {
    console.log(
      `select card count ${card.countOfSelectedCard} is NOT equal to max selectcard ${card.maxSelectedCard}`
    )
    fruitArray.forEach((fruit) => (fruit.show = false))
  } else {
    console.log(
      `select card count ${card.countOfSelectedCard} is equal to max selectcard ${card.maxSelectedCard} so reset value to 0`
    )
    card.countOfSelectedCard = 0
  }

  const element = fruitArray.find((fruit, index) => index == indexcard)

  if (element) {
    console.log(`display current card ${element.name}`, 'background: #222; color: #bada55')
    element.show = true
  }
}

onBeforeMount(() => {
  console.log('mounted')
  gameStore.updateGame('memoryMatch', {})
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
          :class="{ selected: card.nbrOfSelectedCard == index }"
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
    cursor: pointer;
    width: fit-content;
    box-shadow: 2px -2px 5px 1px;
    border: 1px solid #194ecc;
  }
}
</style>
