const state = {
    headerTabIndex: 1
}

const mutations = {
    TAB_INDEX: (state, index) => {
        state.headerTabIndex = index
    }
}

const actions = {
    setTabIndex({ commit }, index) {
        commit('TAB_INDEX', index)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
