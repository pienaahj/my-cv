export default {
    async loadCompetencies(context) {
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
                item: responseData[key].item
            };
            courses.push(course);

            context.commit('setCouses', courses);
        }   
    }
}