import { nanoid } from 'nanoid'

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
  }
}

export const actions = {
  nuxtServerInit (vuexContext, context) {
    console.log('vuexContext :>> ', vuexContext)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // eslint-disable-next-line no-unused-expressions
        vuexContext.commit('setPosts', [
          {
            id: nanoid(6),
            title: 'Orchestrator Yen',
            preview: 'Quod debitis consequatur accusamus.',
            thumbnail: 'http://placekitten.com/601/400'
          },
          {
            id: nanoid(6),
            title: 'Grow Big',
            preview: 'Voluptatibus nihil illo quia.',
            thumbnail: 'http://placekitten.com/602/400'
          },
          {
            id: nanoid(6),
            title: 'Transmitter Brooks',
            preview: 'Asperiores dicta aliquam.',
            thumbnail: 'http://placekitten.com/603/400'
          },
          {
            id: nanoid(6),
            title: 'Brook Burg',
            preview: 'Amet ipsam sint velit beatae optio.',
            thumbnail: 'http://placekitten.com/606/400'
          }
        ])
        resolve()
      }, 1000)
    })
  },
  setPosts ({ commit }, posts) {
    commit('setPosts', posts)
  }
}
