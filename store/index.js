/* eslint-disable no-console */
export const state = () => ({
  loadedPosts: []
})

export const getters = {
  loadedPosts: (state) => {
    return state.loadedPosts
  }
}

export const mutations = {
  setPosts: (state, posts) => {
    state.loadedPosts = posts
  },
  addPost: (state, post) => {
    state.loadedPosts.push(post)
  },
  editPost: (state, editedPost) => {
    const postIdx = state.loadedPosts.findIndex(post => post.id === editedPost.id)
    if (postIdx !== -1) {
      state.loadedPosts[postIdx] = editedPost
    }
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { $axios, env }) {
    try {
      const res = await $axios.get('/posts.json')
      const postsArray = Object.entries(res.data)
        .reduce((arr, [id, post]) => {
          arr.push({ ...post, id })
          return arr
        }, [])
      commit('setPosts', postsArray)
    } catch (error) {
      console.error('Error fetching posts', error)
      commit('setPosts', [])
    }
  },
  setPosts ({ commit }, posts) {
    commit('setPosts', posts)
  },
  async addPost ({ commit }, post) {
    const createdPost = { ...post, updatedDate: new Date() }
    try {
      const { name: id } = await this.$axios.$post('/posts.json', createdPost)
      commit('addPost', { ...createdPost, id })
    } catch (error) {
      console.error('Error storing post', error)
    }
  },
  async editPost ({ commit }, post) {
    const editedPost = { ...post, updatedDate: new Date() }
    try {
      await this.$axios.$put(`/posts/${post.id}.json`, editedPost)
      commit('editPost', editedPost)
    } catch (error) {
      console.error('Error editing post', error)
    }
  }
}
