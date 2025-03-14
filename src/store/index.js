import { createStore } from 'vuex'

export default createStore({
  state: {
    items: JSON.parse(localStorage.getItem('mediaItems')) || [],
    favorites: JSON.parse(localStorage.getItem('favoriteItems')) || []
  },
  getters: {
    allItems: state => state.items,
    favoriteItems: state => state.items.filter(item => state.favorites.includes(item.id)),
    itemById: state => id => state.items.find(item => item.id === id)
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item)
      localStorage.setItem('mediaItems', JSON.stringify(state.items))
    },
    REMOVE_ITEM(state, id) {
      state.items = state.items.filter(item => item.id !== id)
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(favId => favId !== id)
        localStorage.setItem('favoriteItems', JSON.stringify(state.favorites))
      }
      localStorage.setItem('mediaItems', JSON.stringify(state.items))
    },
    TOGGLE_CONSUMED(state, id) {
      const item = state.items.find(item => item.id === id)
      if (item) {
        item.consumed = !item.consumed
        localStorage.setItem('mediaItems', JSON.stringify(state.items))
      }
    },
    TOGGLE_FAVORITE(state, id) {
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(favId => favId !== id)
      } else {
        state.favorites.push(id)
      }
      localStorage.setItem('favoriteItems', JSON.stringify(state.favorites))
    }
  },
  actions: {
    addItem({ commit }, item) {
      const newItem = {
        ...item,
        id: Date.now().toString(),
        consumed: item.consumed || false
      }
      commit('ADD_ITEM', newItem)
    },
    removeItem({ commit }, id) {
      commit('REMOVE_ITEM', id)
    },
    toggleConsumed({ commit }, id) {
      commit('TOGGLE_CONSUMED', id)
    },
    toggleFavorite({ commit }, id) {
      commit('TOGGLE_FAVORITE', id)
    }
  }
})