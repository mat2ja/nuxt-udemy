<template>
  <div class="admin-post-page container p-3">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/admin/AdminPostForm'

export default {
  components: {
    AdminPostForm
  },
  data () {
    return {
      loadedPost: {
        author: 'Matija',
        title: 'MC2 win',
        thumbnailLink: 'http://placekitten.com/605/400',
        content: 'Yet another stroke of genius'
      }
    }
  }
}
</script>
