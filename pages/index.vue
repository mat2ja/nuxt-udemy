<template>
  <div>
    <div class="intro mb-2">
      <h1 class="is-size-1 is-italic">
        Get the latest tech news!
      </h1>
    </div>
    <section class="mt-6 py-2 px-5">
      <PostList :posts="loadedPosts" />
    </section>
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

<style scoped>
.intro {
  background: black;
  padding: 4rem 1rem;
  background-image: url('~assets/images/cats.jpg');
  background-position: center;
}
h1 {
  text-align: center;
  color: white;
}
</style>
