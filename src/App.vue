<script setup lang="ts">
import card from './components/card/card.vue'
import sidebar from './components/sidebar/sidebar.vue'
</script>

<template>
  <div class="container">
    <header><sidebar></sidebar></header>

    <main>
      <card></card>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
