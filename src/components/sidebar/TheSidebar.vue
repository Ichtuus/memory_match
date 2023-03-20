<script setup lang="ts">
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  console.log('mounted')
})
</script>

<template>
  <section class="sidebar p-xxs">
    <span>GAME HUB</span>
    <hr />

    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/memory-match">Memory match</RouterLink></li>
      <li><RouterLink to="/word-mystery">Word mystery</RouterLink></li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.sidebar {
  background-color: #e5e5e5;
  height: 100%;
}
</style>
