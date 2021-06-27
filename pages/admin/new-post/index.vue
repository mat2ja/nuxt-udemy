<template>
  <div class="admin-new-post-page container p-3">
    <section class="new-post-form">
      <AdminPostForm />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/admin/AdminPostForm'

export default {
  components: {
    AdminPostForm
  }
}
</script>
