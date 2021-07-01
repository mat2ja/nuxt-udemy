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
import { nanoid } from 'nanoid'

export default {
  components: {
    PostList
  },
  data () {
    return {
      loadedPosts: [
        {
          id: nanoid(6),
          title: 'Orchestrator invoice Yen',
          preview: 'Quod debitis consequatur animi alias accusamus.',
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
          thumbnail: 'http://placekitten.com/604/400'
        }
      ]
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
