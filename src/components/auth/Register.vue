<script setup lang="ts">
import { useAuthComposable } from '@/composables/auth/auth.composable'

let authComposable = useAuthComposable()
</script>

<template>
  <section class="register p-xxs">
    authComposable {{ authComposable }}
    <div class="ds-container">
      <form class="ds-flex register-form" @submit.prevent="authComposable.handleSubmit">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="authComposable.form.value.name"
          required
        />

        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="authComposable.form.value.password"
          required
        />

        <label for="mail">Mail:</label>
        <input
          type="email"
          id="mail"
          name="mail"
          v-model.trim="authComposable.form.value.mail"
          required
        />

        <button type="submit">Submit</button>
      </form>
      <router-link to="/login">Go to login</router-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
.register-form {
  flex-flow: column;
  align-items: center;
}
</style>
