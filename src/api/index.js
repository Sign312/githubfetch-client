import axios from 'axios'

const baseUrl = 'http://www.flypie.cn:9999'

const api = {}

api.getLanguages = () => {
    return new Promise((resolve, reject) => {
        axios.get(baseUrl + '/languages').then(res => {
            resolve(res.data)
        }).catch(err => reject(err))
    })
}

api.getList = language => {
    return new Promise((resolve, reject) => {
        axios.get(baseUrl + '/list', {
            params: {
                language: language
            }
        }).then(res => {
            resolve(res.data)
        }).catch(err => reject(err))
    })
}

export default api
