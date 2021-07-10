<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">
      Author Name
    </AppControlInput>
    <AppControlInput v-model="editedPost.title">
      Title
    </AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">
      Thumbnail Link
    </AppControlInput>
    <AppControlInput
      v-model="editedPost.content"
      control-type="textarea"
    >
      Content
    </AppControlInput>
    <AppControlInput
      v-model="editedPost.preview"
      control-type="textarea"
    >
      Preview text
    </AppControlInput>
    <div class="mt-3">
      <AppButton class="is-success">
        Save
      </AppButton>
      <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="is-danger"
        @click="onCancel"
      >
        Cancel
      </AppButton>
    </div>
  </form>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data () {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnail: '',
            preview: '',
            content: ''
          }
    }
  },
  methods: {
    onSave () {
      this.$emit('submit', this.editedPost)
    },
    onCancel () {
      // Navigate back
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>
form {
  max-width: 500px;
  margin: 0 auto;
}
</style>
