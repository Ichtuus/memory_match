<script setup lang="ts">
import { UserStore } from '@/stores'
import { onBeforeMount } from 'vue'

const store = UserStore()

store.$subscribe(
  (mutation, state) => {
    console.log('subscribe')
    console.log('mutation', mutation, 'state ', state)
    // import { MutationType } from 'pinia'
    mutation.type // 'direct' | 'patch object' | 'patch function'
    // same as cartStore.$id
    mutation.storeId // 'cart'
    // only available with mutation.type === 'patch object'
    // mutation.payload // patch object passed to cartStore.$patch()

    // persist the whole state to the local storage whenever it changes
  },
  { detached: true }
)

store.$onAction(({ name, args, after, onError }) => {
  const startTime = Date.now()
  console.log(`Start "${name}" with params [${args.join(', ')}].`)
  after((result) => {
    console.log(`Finished "${name}" after ${Date.now() - startTime}ms.\nResult: ${result}.`)
  })

  // this will trigger if the action throws or returns a promise that rejects
  onError((error) => {
    console.warn(`Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`)
  })
}, true)

onBeforeMount(() => {
  console.log('mounted')
})
</script>

<template>
  user {{ store.user }}
  <section class="home p-xxs">home</section>
</template>

<style scoped lang="scss"></style>
