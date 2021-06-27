<template>
  <nuxt-link :to="`/posts/${id}`">
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
    }
  }
}
</script>

<style scoped>
.card {
  min-width: 300px;
  max-width: 100%;
}

.image {
  object-fit: cover;
}
</style>
