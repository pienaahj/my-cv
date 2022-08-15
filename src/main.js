
// import Vue from 'vue';
import App from './App.vue';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import { createApp } from 'vue';

// import BootstrapVue from 'bootstrap-vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";




import store from './store/index.js';
import router from './router.js';
import BaseGreeting from './components/BaseGreeting.vue';

import BaseSpinner from './components/ui/BaseSpinner.vue';
// import BaseCard from './ui/BaseCard.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-greeting', BaseGreeting);
app.component('base-spinner', BaseSpinner);

// Vue.use(BootstrapVue);

app.mount('#app');
