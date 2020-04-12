// import Vue from 'vue'

// import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'

// import '@/styles/index.scss' // global css
// import App from './App'
// import store from './store'
// import router from './router'
import Framework from '@/framework'

Framework.with({
  UNAUTHORIZED_REDIRECT: '/login'
})

// Vue.use(Framework, {
//   UNAUTHORIZED_REDIRECT: '/login'
// })
//
// // eslint-disable-next-line no-new
// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// })
// // Framework.with({...})
