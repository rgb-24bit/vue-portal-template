import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

import app from './modules/app'
import settings from './modules/settings'
import getters from './getters'

import UserStore from '@/store'

const Store = {
  modules: {
    app,
    settings
  },
  getters
}

Vue.use(Vuex)

const store = new Vuex.Store(_.merge(Store, UserStore))

export default store
