<template>
  <div class="home-page">
    <h1 class="is-size-2">
      Get the latest tech news!
    </h1>
    <section class="featured-posts">
      <PostPreview
        id="1"
        title="Hello there"
        preview-text="First post"
        :thumbnail="'http://placekitten.com/400/300'"
      />
      <PostPreview
        id="2"
        title="Hello there again"
        preview-text="Second"
        :thumbnail="'http://placekitten.com/401/300'"
      />
      <PostPreview
        id="3"
        title="Bye there"
        preview-text="My third and final"
        :thumbnail="'http://placekitten.com/402/300'"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/posts/PostPreview.vue'

export default {
  components: {
    PostPreview
  }

}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 2rem;
}

.featured-posts {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
}
</style>
