import { createStore } from 'vuex';

import competenciesModule from './modules/competencies/index';
import skillsModule from './modules/skills/index';


const store = createStore({
    modules: {
        competincies: competenciesModule,
        skills: skillsModule,
    },
    namespaced: true,
    state() {
        return {

        };
    }
});

export default store;