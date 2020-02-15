import axios from 'axios'

const instancia = axios.create({
    baseURL: 'http://localhost:8081'
})

instancia.defaults.headers.common['Authorization'] = 'TOKEN AUTOR DA INSTANCIA'

export default instancia