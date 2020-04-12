import Vue from 'vue'
import moment from 'moment'
import _ from 'lodash'

import * as constant from '../constant'

Vue.filter('filterDate', (value, fmt) => {
  if (_.isUndefined(value)) {
    return constant.EMPTY_STRING
  }
  let dt = moment(value)
  if (dt.isValid()) {
    return dt.format(fmt)
  }
  return constant.EMPTY_STRING
})

Vue.filter('filterEnums', (value, enums, label = '') => {
  for (let item of enums) {
    if (item.value === value) {
      return item.label
    }
  }
  return label
})

Vue.filter('filterDefault', (value, defaultValue) => {
  return value || defaultValue
})
