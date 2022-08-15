export default {
    async loadSkills(context) {
        const response = await fetch('https://my-cv-7674b-default-rtdb.firebaseio.com/skills.json');
        const responseData = await response.json();

        if (!response.ok) {
            //error
            const error = new Error(responseData.message || 'Failed to fetch skills');
            throw error;
        }
    
        // populate the skills
        const skills = [];
        console.log('returned object for Firebase: ', responseData);
        for (const key in responseData) {
            const skill = {
                id: key,
                skill: responseData[key].skill
            };
            skills.push(skill);
        }    
        context.commit('setSkills', skills);
        const skillsLength = skills.lenght;
        console.log('skills lenght: ', skillsLength)
    },

    // register the skills in Firebase to get an id
    
    // load all the skils into Firebase
    async firebaseLoad(context) {
        const skills = [];
       

        async function registerSkills(data) {
            // define a skill
            console.log('data passed to function', data)
            const newSkill = {
                skill: data,
            };
            
            const responseReg = await fetch('https://my-cv-7674b-default-rtdb.firebaseio.com/skills.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSkill),
                });
    
            const responseRegData = await responseReg.json();
    
            if (!responseReg.ok) {
                //error
                const error = new Error(responseRegData.message || 'Failed to fetch skills');
                throw error;
            }
            console.log('new skill loaded: ', newSkill);
            
            console.log('returned object for Firebase: ', responseRegData );

            for (const key in responseRegData ) {
                const skill = {
                    id: key,
                    skill: responseRegData [key].skill
                };
            skills.push(skill);
            }
            return 
        }
        // for (var i = 0; i < allSkills.length; i++) {
        //     await registerSkills(allSkills[i]);
        // }
        const data = "Testing adding a new skill to Firebase"

        await registerSkills(data);
        context.commit('setSkills', skills);
    }

};
        