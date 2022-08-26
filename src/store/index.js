import { createStore } from 'vuex';

import competenciesModule from './modules/competencies/index';
import skillsModule from './modules/skills/index';
import courseModule from './modules/courses/index';


const store = createStore({
    modules: {
        competencies: competenciesModule,
        skills: skillsModule,
        courses: courseModule,
    },
    // state() {
    //     return {

    //     };
    // },
});

export default store;