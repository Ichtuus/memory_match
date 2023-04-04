<script setup lang="ts">
// import card from './components/card/Card.vue'
import { onBeforeMount, onMounted } from 'vue'
import sidebar from './components/sidebar/TheSidebar.vue'
import { UserStore } from './stores'
import { getUser } from '@/api/user/user'

const storeUser = UserStore()

onBeforeMount(async () => {
  console.log('user', storeUser.isAuthenticated)
  if (storeUser.user) {
    const user = await getUser()
    console.log('test', user)
  }
})
</script>

<template>
  <div class="container">
    <header><sidebar></sidebar></header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  min-height: inherit;

  header {
    flex: none;
  }

  main {
    width: 100%;
  }
}
</style>
