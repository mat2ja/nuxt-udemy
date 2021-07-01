<template>
  <section class="post-list container mb-6">
    <PostPreview
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :preview-text="post.preview"
      :thumbnail="post.thumbnail"
      :is-admin="isAdmin"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/posts/PostPreview.vue'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  gap: 1rem;
}

img {
  max-width: 400px;
  object-fit: cover;
}

@media only screen and (max-width: 800px) {
  .post-list {
    grid-template-columns: 1fr;
  }
}
</style>
