export default {
    addNumByasync({ commit }, payload) {
        setTimeout(() => {
            commit('addNum', payload.num);
        }, 1000)
    },
    changeStateProp({commit},payload){
        commit('changeStateProp',payload.name);
    }
}