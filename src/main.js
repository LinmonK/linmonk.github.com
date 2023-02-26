import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router'
import "@/assets/css/style.less"
// import "@/assets/css/style2.css"
createApp(App).use(router).mount('#app')
