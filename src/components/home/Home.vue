<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
// import login from '../auth/login.vue'

const route = useRouter()
let isAuthenticated: boolean = false

// if (isAuthenticated) {
//   route.push('/')
// } else {
//   route.push('/login')
// }

onBeforeMount(() => {
  console.log('mounted')
})
</script>

<template>
  <!-- <section class="login" v-show="isAuthenticated"> -->
  <!-- <login></login> -->
  <!-- </section> -->
  <section class="home p-xxs">home</section>
</template>

<style scoped lang="scss"></style>
