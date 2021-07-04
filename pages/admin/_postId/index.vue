<template>
  <div class="admin-post-page container p-3">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/admin/AdminPostForm'

export default {
  components: {
    AdminPostForm
  },
  layout: 'admin',
  async asyncData (ctx) {
    const node = 'posts'
    const id = ctx.params.postId
    try {
      const loadedPost = await ctx.$axios.$get(
        `${ctx.env.baseUrl}/${node}/${id}.json`
      )
      return { loadedPost: { ...loadedPost, id } }
    } catch (error) {
      console.error(ctx.error)
    }
  },
  methods: {
    async onSubmitted (editedPost) {
      await this.$store.dispatch('editPost', editedPost)
      this.$router.push('/admin')
    }
  }
}
</script>
