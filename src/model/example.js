import Model from '@/model'

class ExampleModel extends Model {
  getList (options = {}) {
    options.url = '/example/list'
    return this.get(options)
  }

  getItem (options = {}) {
    options.url = '/example/item'
    return new Promise((resolve, reject) => {
      this.get(options)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default ExampleModel
