import getters from "./getters";


export default {
    namespaced: true,
    state() {
        return {
            literacies: 
            [
                {
                    id:  'id1',
                    CompSkill:  'Basic Computer skills  (Desktop, Intra/Internet, Office etc.)',
                },
                {
                    id:  'id2',
                    CompSkill:  'Advanced Computer skills (MS Windows, Linux (Rasbian, Ubuntu, Kali, MX, Mint), MacOS, networking)',
                },
                {
                    id:  'id3',
                    CompSkill:  'GIS related skills (ARC View, Arc Info, Arc GIS, ERDAS, GE Smallworld, PathFinder (GPS))',
                },
                {
                    id:  'id4',
                    CompSkill:  'Database design (relational, geo spatial)',
                },
                {
                    id:  'id5',
                    CompSkill:  'Programming skills (Golang, Python, JavaScript, VueJS, NodeJS, SQL, HTML, CSS)',
                },
            ]
        };
    },
    getters,
}

