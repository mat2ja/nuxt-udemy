<template>
  <nuxt-link :to="postLink">
    <div class="card">
      <div class="card-image">
        <figure>
          <img :src="thumbnail" alt="">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h4>{{ title }}</h4>
          <p>{{ previewText }}</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    postLink () {
      return this.isAdmin ? `/admin/${this.id}` : `/posts/${this.id}`
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 100%;
}

.image {
  object-fit: cover;
}
</style>
