<template>
  <div class="home-page">
    <div class="intro">
      <h1 class="is-size-1">
        Get the latest tech news!
      </h1>
    </div>
    <section class="featured-posts container">
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

.featured-posts {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
  padding: 1rem 1rem 3rem;
}

@media only screen and (max-width: 800px) {
  .featured-posts {
    flex-direction: column;
  }
}
</style>
