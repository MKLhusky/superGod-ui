import { createApp } from 'vue'
import 'element-plus/theme-chalk/index.css'
import './assets/global.css'
import App from './App.vue'
import router from './router'
import {ElInput, ElForm, ElButton, ElFormItem } from 'element-plus'
import ElementUI from 'element-plus'
import axios from "axios";

axios.defaults.baseURL = ""
axios.defaults.timeout = 5000

axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem("token");
    console.log('token')
    console.log(token)
    if (token != "undefined" && token != '' && token != null){
        console.log("进来了")
        config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(config)
    return config;
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
    return res.data
},error => {
    return error;
})



const app = createApp(App)

app.use(router)
app.use(ElInput)
app.use(ElementUI)
app.use(ElForm)
app.use(ElFormItem)
app.use(ElButton)

app.mount('#app')

