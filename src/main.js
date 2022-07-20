// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import App from './App'
import router from './router'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false

router.afterEach((to, from) => {
  window.dataLayer.push({
    'event': 'pageview',
    page: {
      page_location: to.fullPath
    }
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
