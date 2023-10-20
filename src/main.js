import { createApp } from 'vue';
import App from './App';
import router from './routes'; // index.js 파일은 생략 가능
import store from './store'; // index.js 파일은 생략 가능

createApp(App).use(router).use(store).mount('#app');
