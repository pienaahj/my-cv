import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            competencies: [
                    {
                        id:  'unique_id1',
                        coreComp:  'competency test',
                    },
                    {
                        id:  'unique_id2',
                        coreComp:  'competency  test2',
                    },
            ],
        };
    },
    mutations,
    actions,
    getters,
};