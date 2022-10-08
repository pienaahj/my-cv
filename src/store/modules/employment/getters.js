export default{
    getEmployment(state) {
        return state.employment;
    },
    hasEmployment(state) {
        return state.employment && state.employment.length > 0;
    },
    getFormal(state) {
        // all employment but UDEMY Online
        
        return state.employment.filter(employmentEntry => employmentEntry.institution !== "UDEMY Online")
    },

}