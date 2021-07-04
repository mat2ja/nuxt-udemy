<template>
  <div class="admin-new-post-page container p-3">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
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
  computed: {
    dbUrl () {
      return this.$store.state.baseFirebaseUrl
    }
  },
  methods: {
    async onSubmitted (postData) {
      const node = 'posts'
      try {
        await this.$axios.$post(`${this.dbUrl}/${node}.json`,
          { ...postData, updatedDate: new Date() }
        )
      } catch (error) {
        console.error('Error storing posts', error)
      }
      this.$router.replace('/admin')
    }
  }
}
</script>
