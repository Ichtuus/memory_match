<script setup lang="ts">
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  console.log('mounted')
})
</script>

<template>
  <section class="sidebar p-xxs">
    <span>Game Hub</span>
    <ul>
      <li>Memory match</li>
      <li>Word mystery</li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.sidebar {
  background-color: #e5e5e5;
  height: 100%;
}
</style>
