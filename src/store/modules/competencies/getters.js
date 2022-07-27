export default{
    competencies(state) {
        return state.competencies;
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        }
    }
}