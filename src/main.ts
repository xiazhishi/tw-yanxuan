import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/fonts/iconfont.css'
import './assets/flexible.js'
import './assets/reset.css'

import vant from 'vant'
import 'vant/lib/index.css'

let app = createApp(App)

app.use(vant)

app.use(router)

app.mount('#app')
