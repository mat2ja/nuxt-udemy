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
      return this.$store.state.dbUrl
    }
  },
  methods: {
    async onSubmitted (postData) {
      // TODO: dont send id
      await this.$store.dispatch('addPost', postData)
      this.$router.replace('/admin')
    }
  }
}
</script>
