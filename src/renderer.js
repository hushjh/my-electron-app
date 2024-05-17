

import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via Vite');
import { createApp } from 'vue'
import App from './app.vue'

createApp(App).mount('#app')