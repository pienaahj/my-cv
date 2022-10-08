export default {
    async loadResponsibilities(context) {
        const response = await fetch('https://my-cv-7674b-default-rtdb.firebaseio.com/responsibilities.json');
        const responseData = await response.json();

        if (!response.ok) {
            //error
            const error = new Error(responseData.message || 'Failed to fetch responsibilities');
            throw error;
        }
    
        // populate the responsibilities
        const responsibilities = [];

        for (const key in responseData) {
            const responsibility = {
                id: key,
                responsibility: responseData[key].responsibility
            };
            responsibilities.push(responsibility);
        }    
        context.commit('setResponsibilities', responsibilities);
    },
};
        
