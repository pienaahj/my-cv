export default {
    async loadEmployment(context) {
        const response = await fetch('https://my-cv-7674b-default-rtdb.firebaseio.com/employmentsHistory.json');
        const responseData = await response.json();

        if (!response.ok) {
            //error
            const error = new Error(responseData.message || 'Failed to fetch employment');
            throw error;
        }
    
        // populate the employment
        const employment = [];

        for (const key in responseData) {
            const employmentEntry = {
                id: key,
                durationPeriod: responseData[key].durationPeriod,
                jobTitle: responseData[key].jobTitle,
                place: responseData[key].place,
                jobDescription1: responseData[key].jobDescription1,
                jobDescription2: responseData[key].jobDescription2,
                jobDescription3: responseData[key].jobDescription3,
                jobResponsibilities1: responseData[key].jobResponsibilities1,
                jobResponsibilities2: responseData[key].jobResponsibilities2,
                jobResponsibilities3: responseData[key].jobResponsibilities3,

            };
            employment.push(employmentEntry);

            context.commit('setEmployment', employment);
        }   
    }
}