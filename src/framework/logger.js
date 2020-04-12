/**
 * 简单的日志输出模块，仅在开发环境下通过 `console` 输出日志
 *
 * @author rgb-24bit
 */

import * as constant from './constant'

const noop = function() {}

const aorb = function(a, b) {
  return () => {
    if (process.env === constant.ENV_PRODUCTION) {
      return a
    }
    return b
  }
}

const logger = {}

Object.defineProperties(logger, {
  log: {
    get: aorb(noop, console.log)
  },
  info: {
    get: aorb(noop, console.info)
  },
  warn: {
    get: aorb(noop, console.warn)
  },
  error: {
    get: aorb(noop, console.error)
  }
})

export default logger
