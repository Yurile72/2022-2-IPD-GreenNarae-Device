import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import firebaseConfig from '../firebaseConfig'

import {
    initializeApp
  } from 'firebase/app'
  import {
    // eslint-disable-next-line
    getDatabase,
    // eslint-disable-next-line
    ref,
    // eslint-disable-next-line
    onValue
  } from 'firebase/database'

const app = createApp(App)
app.config.globalProperties.$firebase = initializeApp(firebaseConfig)
app.use(router)
app.mount('#app')

