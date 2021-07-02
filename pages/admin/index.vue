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
      <PostList is-admin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue'
import AppButton from '@/components/UI/AppButton.vue'
import { nanoid } from 'nanoid'

export default {
  components: {
    PostList,
    AppButton
  },
  layout: 'admin',
  asyncData (context, callback) {
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: nanoid(6),
            title: 'Orchestrator Yen',
            preview: 'Quod debitis consequatur accusamus.',
            thumbnail: 'http://placekitten.com/601/400'
          },
          {
            id: nanoid(6),
            title: 'Grow Big',
            preview: 'Voluptatibus nihil illo quia.',
            thumbnail: 'http://placekitten.com/602/400'
          },
          {
            id: nanoid(6),
            title: 'Transmitter Brooks',
            preview: 'Asperiores dicta aliquam.',
            thumbnail: 'http://placekitten.com/603/400'
          },
          {
            id: nanoid(6),
            title: 'Brook Burg',
            preview: 'Amet ipsam sint velit beatae optio.',
            thumbnail: 'http://placekitten.com/606/400'
          }
        ]
      })
    }, 1500)
  }
}
</script>

<style scoped>
.new-post {
  display: flex;
  justify-content: center;
}
</style>
