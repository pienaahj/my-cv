export default{
    getCompetencies(state) {
        return state.competencies;
    },
    hasCompetencies(state) {
        return state.competencies && state.competencies.length > 0;
    },
    // loadedComp(state) {
    //     return state.loaded;
    // },
    // loadedCount(state) {
    //     return state.recordCount;
    // }
}