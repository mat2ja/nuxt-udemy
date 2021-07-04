/* eslint-disable no-console */
export const state = () => ({
  loadedPosts: [],
  baseFirebaseUrl: 'https://nuxt-demo-blog-default-rtdb.europe-west1.firebasedatabase.app'
})

export const getters = {
  loadedPosts: (state) => {
    return state.loadedPosts
  }
}

export const mutations = {
  setPosts: (state, posts) => {
    state.loadedPosts = posts
  }
}

export const actions = {
  async nuxtServerInit ({ state, commit }, { $axios }) {
    const node = 'posts'
    const posts = await $axios.$get(`${state.baseFirebaseUrl}/${node}.json`)
      .catch(e => console.error(e))
    const postsArray = Object.entries(posts).reduce((array, [id, post]) => {
      array.push({ ...post, id })
      return array
    }, [])
    console.log(postsArray)
    commit('setPosts', postsArray)
  }
}
