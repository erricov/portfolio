import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//FA 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faSms } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
 

library.add(faAddressCard)
library.add(faMailBulk)
library.add(faPhoneSquare)
library.add(faInstagram)
library.add(faFacebookF)
library.add(faTwitter)
library.add(faLinkedinIn)
library.add(faHome)
library.add(faBookOpen)
library.add(faSms)
library.add(faArrowRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



