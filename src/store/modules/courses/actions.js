export default {
    async loadCourses(context) {
        const response = await fetch('https://my-cv-7674b-default-rtdb.firebaseio.com/courses.json');
        const responseData = await response.json();

        if (!response.ok) {
            //error
            const error = new Error(responseData.message || 'Failed to fetch courses');
            throw error;
        }
    
        // populate the courses
        const courses = [];

        for (const key in responseData) {
            const course = {
                id: key,
                completed: responseData[key].completed,
                courseCategory: responseData[key].courseCategory,
                courseTitle: responseData[key].courseTitle,
                datePeriod: responseData[key].datePeriod,
                description: responseData[key].description,
                institution: responseData[key].institution,
            };
            courses.push(course);

            context.commit('setCourses', courses);
        }   
    }
}