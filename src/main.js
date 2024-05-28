import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

createApp(App).use(Toast).mount('#app')
