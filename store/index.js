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
    try {
      const res = await $axios.get(`${state.baseFirebaseUrl}/${node}.json`)
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
  }
}
