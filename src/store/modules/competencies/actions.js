export default {
    async loadCompetencies (context, data) {
        if (!data.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }
        const response = await fetch('https://my-cv-7674b-default-rtdb.firebaseio.com/coreComp.json');
        const responseData = await response.json();

        if (!response.ok) {
            //error
            const error = new Error(responseData.message || 'Failed to fetch competencies');
            throw error;
        }

        // populate the competencies
        const competencies = [];

        for (const key in responseData) {
            const competency = {
                id: key,
                item: responseData[key].item
            };
            competencies.push(competency);
        }

        context.commit('setCompetencies', competencies);
    }
};