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

export default {
  name: 'AdminAuthPage',
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
