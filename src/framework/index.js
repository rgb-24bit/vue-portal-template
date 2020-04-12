import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import _ from 'lodash'
import 'normalize.css/normalize.css'

import '@@/icons'
import '@@/styles/index.scss'
import App from '@@/App'
import store from '@@/store'
import router from '@@/router'
import logger from './logger'
import HttpClient from './http'

import './filters'

/**
 * options:
 *  UNAUTHORIZED_REDIRECT
 */
const Framework = {
  install: (Vue, options) => {
    const http = HttpClient(options)

    // 全局注册组件
    const requireComponent = require.context(
      './components/lib',
      false,
      /[\w-]+\.(vue|js)$/
    )
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)

      const componentName = _.upperFirst(
        _.camelCase(
          fileName
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
      )

      Vue.component(componentName, componentConfig.default || componentConfig)
    })

    Vue.use(VueRouter)
    Vue.use(ElementUI)

    Object.defineProperties(Vue.prototype, {
      $logger: {
        get() {
          return logger
        }
      },
      $message: {
        get() {
          return ElementUI.Message
        }
      },
      $http: {
        get() {
          return http
        }
      }
    })
  },
  with: (options) => {
    Vue.use(Framework, options)

    let vm = new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })

    window.Vue = Vue
    window.vm = vm
  }
}

export default Framework
