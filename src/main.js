import { createApp } from 'vue'
import App from './App.vue'
import { setupPlugins } from './plugins';
import 'vant/lib/index.css';

const app = createApp(App)

setupPlugins(app)

app.mount('#app')
