import { createApp } from 'vue'

import App from './App.vue'
import { router } from './router'

/* PrimeVue */
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeicons/primeicons.css'

import './assets/styles/index.css'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.mount('#app')
