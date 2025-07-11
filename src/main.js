import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'
import router from './routers/route';


createApp(App).use(HighchartsVue).use(router).mount('#app');

