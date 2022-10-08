import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';
import HomePage from './pages/HomePage.vue';
import AboutMe from './pages/AboutMe.vue';
import DefaultPage from './pages/DefaultPage.vue';
import CoursePage from './pages/CoursePage.vue';
import EmploymentPage from './pages/EmploymentPage.vue';
import PersonalPage from './pages/PersonalPage.vue';



const router = createRouter({
    history: createWebHistory(), // use the built in browser history
    routes: [
        { path: '/', redirect: '/HomePage'},
        { path: '/homePage',
          component: HomePage, 
          props: true,
        },
        {path: '/CoursePage',
            component: CoursePage,
            props: true,
        },
        {path: '/EmploymentPage',
            component: EmploymentPage,
            props: true,
        },
        { path: '/aboutMe', component: AboutMe},
        { path: '/personalPage', component: PersonalPage},
        { path: '/defaultPage', component: DefaultPage},
        { path: '/:notFound(.*)', component: NotFound},
    ] // which component to load for which URL
}); 

export default router;