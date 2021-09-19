
import axios from 'axios'

const api = axios.create({
  baseURL: "https://devstop.herokuapp.com/api"
})

export default api
