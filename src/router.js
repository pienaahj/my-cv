
import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';
import HomePage from './pages/HomePage.vue';
import AboutMe from './pages/AboutMe.vue';
import CoursePage from './pages/CoursePage.vue';
import EmploymentPage from './pages/EmploymentPage.vue';
import PersonalPage from './pages/PersonalPage.vue';
import SiteInfo from './pages/SiteInfo.vue';


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
        { path: '/siteInfo', component: SiteInfo},
        { path: '/personalPage', component: PersonalPage},
        { path: '/:notFound(.*)', component: NotFound},
    ] // which component to load for which URL
}); 

export default router;