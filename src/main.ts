import { createApp } from 'vue'
import 'element-plus/theme-chalk/index.css'
import './assets/global.css'
import App from './App.vue'
import router from './router'
import {ElInput, ElForm, ElButton, ElFormItem } from 'element-plus'
import ElementUI from 'element-plus'

const app = createApp(App)

app.use(router)
app.use(ElInput)
app.use(ElementUI)
app.use(ElForm)
app.use(ElFormItem)
app.use(ElButton)

app.mount('#app')
