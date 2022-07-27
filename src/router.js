import NotFound from './pages/NotFound.vue';
import HomePage from './pages/HomePage.vue';
import { routerKey } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(), // use the built in browser history
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomePage},
        {path: '/:notFound(.*)', component: NotFound},
    ] // which component to load for which URL
}); 

export default router;