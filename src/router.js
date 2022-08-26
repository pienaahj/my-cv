import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';
import HomePage from './pages/HomePage.vue';
import AboutMe from './pages/AboutMe.vue';
import DefaultPage from './pages/DefaultPage.vue';


const router = createRouter({
    history: createWebHistory(), // use the built in browser history
    routes: [
        {path: '/', redirect: '/defaultPage'},
        {path: '/homePage', component: HomePage},
        {path: '/aboutMe', component: AboutMe},
        {path: '/defaultPage', component: DefaultPage},
        {path: '/:notFound(.*)', component: NotFound},
    ] // which component to load for which URL
}); 

export default router;