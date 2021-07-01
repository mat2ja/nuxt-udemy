<template>
  <div class="container p-4">
    <div class="card">
      <form class="card-content">
        <AppControlInput type="email">
          E-Mail Address
        </AppControlInput>
        <AppControlInput type="password" class="mt-2 mb-4">
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
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
  name: 'AdminAuthPage',
  components: {
    AppControlInput,
    AppButton
  },
  layout: 'admin',
  data () {
    return {
      isLogin: true
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
