<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="title">
        {{ loadedPost.title }}
      </h1>
      <div class="post-details">
        <div class="post-detail subtitle is-6">
          Last updated on {{ loadedPost.updatedDate | date }}
        </div>
        <div class="post-detail title is-6 my-3">
          Written by {{ loadedPost.author }}
        </div>
      </div>
      <p class="post-content py-5">
        {{ loadedPost.content }}
      </p>
    </section>
    <section class="post-feedback mt-5">
      <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.</p>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData (ctx) {
    const node = 'posts'
    const id = ctx.params.id
    try {
      const loadedPost = await ctx.$axios.$get(
        `${ctx.env.baseUrl}/${node}/${id}.json`)
      return { loadedPost }
    } catch (error) {
      console.error(ctx.error)
    }
  },
  head: {
    title: 'A blog post'
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
