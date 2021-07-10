<template>
  <div class="mt-6 py-2 px-5">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  // middleware: 'log',
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>
