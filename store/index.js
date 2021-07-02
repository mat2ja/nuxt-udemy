export const state = () => ({
  loadedPosts: []
})

export const getters = {
  posts: (state) => {
    return state.loadedPosts
  }
}

export const mutations = {
  setPosts: (state, posts) => {
    state.loadedPosts = posts
  }
}

export const actions = {
  setPosts ({ commit }, posts) {
    commit('setPosts', posts)
  }
}
