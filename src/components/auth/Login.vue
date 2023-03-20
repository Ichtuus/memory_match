<script setup lang="ts">
import { manageAuthComposable } from '@/composables/auth/auth.composable'

let authComposable = manageAuthComposable()
</script>

<template>
  <section class="login p-xxs">
    authComposable {{ authComposable }}<br />
    isValidateEmail = {{ authComposable.isValidateEmail }}
    <div class="ds-container">
      <form class="ds-flex login-form" @submit.prevent="authComposable.handleSubmit">
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
      <router-link to="/register">Create account</router-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
.login-form {
  flex-flow: column;
  align-items: center;
}
</style>
