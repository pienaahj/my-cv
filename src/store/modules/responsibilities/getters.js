export default{
    getResponsibilities(state) {
        return state.responsibilities;
    },
    hasResponsibilities(state) {
        return state.responsibilities && state.responsibilities.length > 0;
    },
}