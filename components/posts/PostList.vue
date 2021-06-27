<template>
  <section class="post-list container mb-6">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      title="Hello there"
      preview-text="First post"
      :thumbnail="'http://placekitten.com/600/400'"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="Hello there again"
      preview-text="Second"
      :thumbnail="'http://placekitten.com/610/400'"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      title="Bye there"
      preview-text="My third and final"
      :thumbnail="'http://placekitten.com/602/400'"
    />
    <PostPreview
      id="4"
      :is-admin="isAdmin"
      title="Somebody ate my icecream"
      preview-text="Yo mama"
      :thumbnail="'http://placekitten.com/603/400'"
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
      default: false
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
