import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// FontAwesome용 파일
import "@/fontAwesomeIcon.js"

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
