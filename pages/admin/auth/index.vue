<template>
  <div class="container p-4">
    <div class="card">
      <form class="card-content" @submit.prevent="onSubmit">
        <AppControlInput v-model="email" type="email">
          E-Mail Address
        </AppControlInput>
        <AppControlInput v-model="password" type="password" class="mt-2 mb-4">
          Password
        </AppControlInput>
        <AppButton type="submit" btn-style="is-link">
          {{ isLogin ? 'Login' : 'Sign Up' }}
        </AppButton>
        <AppButton
          type="button"
          class="ml-2"
          btn-style="is-link is-light"
          @click="isLogin = !isLogin"
        >
          Switch to {{ isLogin ? 'Signup' : 'Login' }}
        </AppButton>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data () {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  methods: {
    async onSubmit () {
      try {
        if (!this.validateEmail(this.email) || !this.validatePassword(this.password)) {
          throw new Error('Invalid email and/or password!')
        }
        const url = this.isLogin
          ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKey}`
          : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKey}`

        const result = await this.$axios.$post(url, {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        })
        console.log(result)
      } catch (error) {
        console.error(error.message)
      }
    },
    validateEmail (email) {
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    validatePassword (password) {
      return !!password && password.length > 4
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
}
</style>
