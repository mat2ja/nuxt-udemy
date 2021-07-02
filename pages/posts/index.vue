<template>
  <div class="mt-6 py-2 px-5">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue'
import { nanoid } from 'nanoid'

export default {
  components: {
    PostList
  },
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
