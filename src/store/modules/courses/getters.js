export default{
    getCourses(state) {
        return state.courses;
    },
    hasCourses(state) {
        return state.courses && state.courses.length > 0;
    },
    getFormal(state) {
        // all courses but UDEMY Online
        
        return state.courses.filter(course => course.institution !== "UDEMY Online")
    },
    getOnline(state){
        //all UDEMY Online courses
        return state.courses.filter(course => course.institution == "UDEMY Online")
    },
}