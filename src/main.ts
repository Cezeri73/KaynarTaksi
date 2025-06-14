import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faPhone, 
  faCity, 
  faPlane, 
  faCar, 
  faUsers, 
  faClock, 
  faMapMarker,
  faBars
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

// Font Awesome ikonlarını kaydet
library.add(
  faPhone,
  faCity,
  faPlane,
  faCar,
  faUsers,
  faClock,
  faMapMarker,
  faBars
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
