
import { createApp } from 'vue';
import store from './store/index.js';
import router from './router.js';
import App from './App.vue';

import 'mdb-vue-ui-kit/css/mdb.min.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import './assets/custom/custom.scss'

import BaseGreeting from './components/BaseGreeting.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-greeting', BaseGreeting);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
