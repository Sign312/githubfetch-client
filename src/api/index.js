import axios from 'axios'

//前后端分离调试时设置
// const baseUrl = 'http://localhost:9999'

//上线版本
const baseUrl = ''

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
