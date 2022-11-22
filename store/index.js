export const state = () => ({
    currentUser: {}
})

export const getters = {
    getCurrentUser(state) {
        return state.currentUser
    }
}

export const mutations = {
    currentUser(state, value) {
        state.currentUser = value
    },

    setCurrentUser(state, value) {
        state.currentUser = value
    },

    cleanCurrentUser(state) {
        state.currentUser = null;
    },    
}

export const actions = {
    cleanCurrentUser({ commit }) {
        commit('cleanCurrentUser');
    },
    setCurrentUser({ commit }, user) {
        commit('setCurrentUser', user);
    },        
  
}