<template>
  <div class="mt-4 p-5 container">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">
        Create Post
      </AppButton>
    </section>
    <section class="existing-posts">
      <h2 class="is-size-2 my-5">
        Existing posts
      </h2>
      <PostList />
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
  }
}
</script>

<style scoped>
.new-post {
  display: flex;
  justify-content: center;
}
</style>
