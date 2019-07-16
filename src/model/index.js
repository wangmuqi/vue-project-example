import axios from 'axios'

class Model {
  constructor ({
    apiBaseURL = ''
  }) {
    this.axiosInstance = axios.create({
      baseURL: apiBaseURL
    })
  }

  api (options = {}) {
    return new Promise((resolve, reject) => {
      this.axiosInstance.request(options).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }

  get (options = {}) {
    options.method = 'get'
    return this.api(options)
  }

  post (options = {}) {
    options.method = 'post'
    return this.api(options)
  }

  put (options = {}) {
    options.method = 'put'
    return this.api(options)
  }

  delete (options = {}) {
    options.method = 'delete'
    return this.api(options)
  }
}

export default Model
