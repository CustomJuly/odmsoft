import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { svgSpritePlugin } from 'vue-svg-sprite'
import App from './App.vue'
import router from './router'
import Datepicker from '@vuepic/vue-datepicker';
import {useAuth} from "@/composables/auth";
import './assets/main.scss'
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)
const {init} = useAuth()

init()
app.use(createPinia())
app.use(router)
app.use(svgSpritePlugin, {
    url: '/sprite.svg',
})
// eslint-disable-next-line vue/multi-word-component-names
app.component('Datepicker', Datepicker);

app.mount('#app')
