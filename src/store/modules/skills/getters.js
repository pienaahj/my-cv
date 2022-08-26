export default{
    getSkills(state) {
        return state.skills;
    },
    hasSkills(state) {
        return state.skills && state.skills.length > 0;
    },
}