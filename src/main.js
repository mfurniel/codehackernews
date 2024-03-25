import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './config/i18n'
import VueDOMPurifyHTML from 'vue-dompurify-html'

Vue.config.productionTip = false


new Vue({
  vuetify,
  i18n,
  VueDOMPurifyHTML,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueDOMPurifyHTML);