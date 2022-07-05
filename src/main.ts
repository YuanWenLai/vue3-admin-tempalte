import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './permission.ts'

 // 创建vue实例
 const app = createApp(App)

 //svg-icon
//import svg-icon doc in  https://github.com/anncwb/vite-plugin-svg-icons/blob/main/README.zh_CN.md
import 'virtual:svg-icons-register'
import svgIcon from '@/icons/SvgIcon.vue'
app.component('SvgIcon', svgIcon)
 
 app.use(ElementPlus)
app.use(router)

 // 挂载pinia
 app.use(store)
 
 // 挂载实例
 app.mount('#app');
