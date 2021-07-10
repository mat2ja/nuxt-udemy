import Vue from 'vue'

import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'
import PostList from '@/components/posts/PostList.vue'

const components = { AppButton, AppControlInput, PostList }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
