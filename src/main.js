
import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
import NotFound from './pages/NotFound.vue';
import HomePage from './pages/HomePage.vue';
import BaseGreeting from './components/BaseGreeting.vue';
// import BaseSpinner from './ui/BaseSpinner.vue';
// import BaseCard from './ui/BaseCard.vue';

import { createRouter, createWebHistory } from 'vue-router';



const router = createRouter({
    history: createWebHistory(), // use the built in browser history
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomePage},
        {path: '/:notFound(.*)', component: NotFound},
    ] // which component to load for which URL
});

const store = createStore({
    state() {
        return {

        };
    }
});

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-greeting', BaseGreeting);

app.mount('#app');
