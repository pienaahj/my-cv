export default {
    async loadCompetencies (context, data) {
        if (!data.forceRefresh && !context.getters.shouldUpdate) {
            return;
            const repsonse = await fetch('https://my-cv-7674b-default-rtdb.firebaseio.com/coreComp.json');
            const responseData = await repsonse.json();

            if (!response.ok) {
                //error
            }

            // populate the competencies
            const competencies = [];

            for (const key in responseData) {
                const competency = {
                    id: key,
                    item: responseData[key].item
                }
            };
            competencies.push(competency);
        }

        context.commit('setCompetencies', competencies);
    }
}