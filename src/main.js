import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/skin/main.css'

import 'tw-elements';

createApp(App).use(router).use(store).mount('#app')
