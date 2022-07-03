import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


 // 创建vue实例
 const app = createApp(App)
 
 app.use(ElementPlus)
app.use(router)

 // 挂载pinia
 app.use(store)
 
 // 挂载实例
 app.mount('#app');
