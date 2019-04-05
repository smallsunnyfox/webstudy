export default {
    lists(state) {
        return state.lists;
    },
    item: (state) => (i) => {
        return state.lists[i];
    },
    myProp(state){
        return state.myProp;
    }
}