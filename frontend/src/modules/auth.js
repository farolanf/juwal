import axios from 'axios'
import { API_HOST } from '$src/const'

const storeToken = token => {
  localStorage.setItem('token', token)
}

const loadToken = () => localStorage.getItem('token')

export const storeReferer = () => {
  const url = window.location.pathname + window.location.search
  localStorage.setItem('referer', url)
}

export const loadReferer = () => localStorage.getItem('referer')

export const connect = (provider, search) => {
  const url = `${API_HOST}/auth/${provider}/callback${search}`
  return axios
    .get(url)
    .then(res => {
      storeToken(res.data.jwt)
      initAuthorization()
    })
    // eslint-disable-next-line
    .catch(console.log)
}

const initAuthorization = () => {
  const token = loadToken()
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

initAuthorization()