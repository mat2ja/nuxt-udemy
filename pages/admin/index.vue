<template>
  <div class="mt-4 p-5 container">
    <section class="new-post">
      <AppButton class="mr-2 is-primary" @click="$router.push('/admin/new-post')">
        Create Post
      </AppButton>
      <AppButton @click="$router.push('/')">
        Go home
      </AppButton>
    </section>
    <section class="existing-posts">
      <h2 class="is-size-2 my-5">
        Existing posts
      </h2>
      <PostList is-admin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue'
import AppButton from '@/components/UI/AppButton.vue'

export default {
  components: {
    PostList,
    AppButton
  },
  layout: 'admin',
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.new-post {
  display: flex;
  justify-content: center;
}
</style>
