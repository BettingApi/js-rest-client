import axios from 'axios'
// @ts-ignore
import packageJson from './package.json'

const client = axios.create({
  timeout: 60000,
  headers: {
    CLIENT_TYPE: 'js',
    CLIENT_VERSION: packageJson.version,
  },
  baseURL: 'https://api.betting-api.com/betway',
})

export default client
