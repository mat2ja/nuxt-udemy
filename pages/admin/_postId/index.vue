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
        `${ctx.store.state.dbUrl}/${node}/${id}.json`
      )
      return { loadedPost }
    } catch (error) {
      console.error(ctx.error)
    }
  },
  computed: {
    dbUrl () {
      return this.$store.state.dbUrl
    }
  },
  methods: {
    async onSubmitted (editedPost) {
      const id = this.$route.params.postId
      await this.$store.dispatch('editPost', { ...editedPost, id })
      this.$router.push('/admin')
    }
  }
}
</script>
