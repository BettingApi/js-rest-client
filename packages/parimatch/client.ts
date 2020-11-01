import axios from 'axios'
// @ts-ignore
import packageJson from './package.json'

const client = axios.create({
  timeout: 60000,
  headers: {
    'client-type': 'js',
    'client-version': packageJson.version,
  },
  baseURL: 'https://api.betting-api.com/parimatch',
})

export default client
