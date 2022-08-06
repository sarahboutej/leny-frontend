import Home from './pages/Home.vue';
import Header from './pages/Header.vue'

const components = {
  'home': Home,
  'header': Header
};

for (const key in components) {
  Vue.component(key, components[key]);
}
