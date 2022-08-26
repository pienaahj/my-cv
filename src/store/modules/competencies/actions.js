export default {
    async loadCompetencies (context) {
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
                coreComp: responseData[key].coreComp,
            };
            competencies.push(competency);
        }

        context.commit('loadCompetencies', competencies);

    },
};