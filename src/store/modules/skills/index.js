import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";


export default {
    namespaced: true,
    state() {
        return {
            skills: 
            [
                {
                    id:  'unique_id1',
                    skill:  'skill test',
                },
                {
                    id:  'unique_id2',
                    skill:  'skill test',
                },
            ]
        };
    },
    mutations,
    actions,
    getters,
}