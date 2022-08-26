export default {
    async loadSkills(context) {
        const response = await fetch('https://my-cv-7674b-default-rtdb.firebaseio.com/skill.json');
        const responseData = await response.json();

        if (!response.ok) {
            //error
            const error = new Error(responseData.message || 'Failed to fetch skills');
            throw error;
        }
    
        // populate the skills
        const skills = [];

        for (const key in responseData) {
            const skill = {
                id: key,
                skill: responseData[key].skill
            };
            skills.push(skill);
        }    
        context.commit('setSkills', skills);
    },
};
        
