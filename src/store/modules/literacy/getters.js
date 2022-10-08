export default{
    getLiteracy(state) {
        return state.literacies;
    },
    hasLiteracy(state) {
        return state.literacies && state.literacies.length > 0;
    },
}