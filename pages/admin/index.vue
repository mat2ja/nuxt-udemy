<template>
  <div class="mt-4 p-5 container">
    <section class="new-post">
      <button class="button is-info" @click="$router.push('/admin/new-post')">
        Create Post
      </button>
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

export default {
  components: {
    PostList
  }

}
</script>

<style scoped>
.new-post {
  display: flex;
  justify-content: center;
}
</style>
