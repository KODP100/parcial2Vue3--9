import { createApp } from 'vue'; // Vue 3 usa createApp en lugar de new Vue
import App from './App.vue';
import router from './router'; // Vue Router 4

import './assets/style.css';  // Para los estilos de Tailwind CSS

const app = createApp(App);
app.use(router);  // Integrar el router en la aplicación
app.mount('#app');  // Montar la aplicación en el DOM
