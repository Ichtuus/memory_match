// mouse.js
import { ref, computed } from 'vue'
import { login, getUser } from '@/api/user/user'
type loginPayloadT = {
  password: string
  email: string
}

// by convention, composable function names start with "use"
export function manageAuthComposable() {
  let form = ref({
    name: '',
    password: '',
    mail: ''
  })

  let api: any = null

  const isValidateEmail = computed(() => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(form.value.mail)
  })

  async function handleSubmit(event: any) {
    console.log('handlesubmit', event)
    let allFieldsFilled = Object.values(form).every((value: any) => value !== '')

    // if (allFieldsFilled) {
    // console.log('filled')
    const data = await login<loginPayloadT>({
      password: form.value.password,
      email: form.value.mail
    })
    await getUser()
    console.log('data', data)
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
