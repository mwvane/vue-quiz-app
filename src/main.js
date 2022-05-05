import { createApp } from 'vue'
import mitt from "mitt";
import App from './App.vue'

export const eventEmitter = mitt()

createApp(App).mount('#app')

