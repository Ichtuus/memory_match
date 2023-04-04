// mouse.js
import { ref, computed } from 'vue'
import { login } from '@/api/user/user'
import { UserStore } from '@/stores'

export type loginPayloadT = {
  password: string
  email: string
}

// by convention, composable function names start with "use"
export function useAuthComposable() {
  let form = ref({
    name: '',
    password: '',
    mail: ''
  })

  const store = UserStore()

  const isValidateEmail = computed(() => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(form.value.mail)
  })

  async function handleSubmit(event: any) {
    console.log('handlesubmit', event)
    // let allFieldsFilled = Object.values(form).every((value: any) => value !== '')

    // if (allFieldsFilled) {
    // console.log('filled')
    const user = await login<loginPayloadT>({
      password: form.value.password,
      email: form.value.mail
    })

    store.updateUserAction(user)
    // store.$patch((state) => {
    //   state._user = user
    // })

    // const data = await api.getUsers()
    // }
  }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  //   onMounted(() => window.addEventListener('handleSubmit', handleSubmit))
  //   onUnmounted(() => window.removeEventListener('handleSubmit', handleSubmit))

  // expose managed state as return value
  return { form, handleSubmit, isValidateEmail }
}
