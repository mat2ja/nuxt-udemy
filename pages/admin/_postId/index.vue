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
        `${ctx.store.state.baseFirebaseUrl}/${node}/${id}.json`
      )
      return { loadedPost }
    } catch (error) {
      console.error(ctx.error)
    }
  },
  computed: {
    dbUrl () {
      return this.$store.state.baseFirebaseUrl
    }
  },
  methods: {
    async onSubmitted (editedPost) {
      const node = 'posts'
      const id = this.$route.params.postId
      try {
        await this.$axios.$put(`${this.dbUrl}/${node}/${id}.json`,
          { ...editedPost, updatedDate: new Date() }
        )
      } catch (error) {
        console.error('Error storing posts', error)
      }
      this.$router.push('/admin')
    }
  }
}
</script>
