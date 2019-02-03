import axios from 'axios'
import NProgress from 'nprogress'
import Vue from 'vue'

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://api.johnniang.me'
      : 'https://api.johnniang.me',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    NProgress.start()
    return config
  },
  error => {
    NProgress.remove()
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    NProgress.done()
    return response
  },
  error => {
    NProgress.done()
    Vue.$log.error('Response error', error)
    return Promise.reject(error)
  }
)

export default service
