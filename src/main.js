
import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
import Store from './Store/index.js';
import router from './router.js';
import BaseGreeting from './components/BaseGreeting.vue';
// import BaseSpinner from './ui/BaseSpinner.vue';
// import BaseCard from './ui/BaseCard.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-greeting', BaseGreeting);

app.mount('#app');
