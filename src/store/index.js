import { createStore } from 'vuex';

import competenciesModule from './modules/competencies/index';
import skillsModule from './modules/skills/index';
import courseModule from './modules/courses/index';


const store = createStore({
    modules: {
        competincies: competenciesModule,
        skills: skillsModule,
        courses: courseModule,
    },
    namespaced: true,
    state() {
        return {

        };
    }
});

export default store;