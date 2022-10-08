import { createStore } from 'vuex';

import competenciesModule from './modules/competencies/index';
import skillsModule from './modules/skills/index';
import courseModule from './modules/courses/index';
import responsibilitiesModule from './modules/responsibilities/index';
import literacyModule from './modules/literacy';
import employmentModule from './modules/employment/index';


const store = createStore({
    modules: {
        competencies: competenciesModule,
        skills: skillsModule,
        courses: courseModule,
        responsibilities: responsibilitiesModule,
        literacy: literacyModule,
        employment: employmentModule,
    },
});

export default store;