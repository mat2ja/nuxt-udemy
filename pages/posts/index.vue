<template>
  <div class="mt-6 py-2 px-5">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue'

export default {
  components: {
    PostList
  },
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>
