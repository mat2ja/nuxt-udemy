<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="controlType === 'input'"
      class="input"
      :type="type"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <textarea
      v-if="controlType === 'textarea'"
      class="textarea"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      required: false
    }
  }
}
</script>
