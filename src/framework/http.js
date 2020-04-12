import axios from 'axios'
import {Message} from 'element-ui'
import logger from './logger'

function HttpClient(options) {
  const service = axios.create({
    timeout: 5000
  })

  // response interceptor
  service.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        Message.warning('未登录为登录已过期')
        this.$router.push({path: options.UNAUTHORIZED_REDIRECT})
      } else {
        logger.error(error)
        Message.error(error.response.data.message)
      }
      return Promise.reject(error)
    }
  )

  return service
}

export default HttpClient
