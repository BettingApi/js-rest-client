import client from './client'
import apis from './src/apis'

function registerApp({ secret_key }: { secret_key: string}) {
  client.defaults.headers.authorization = secret_key
}

export default {
  registerApp,
  ...apis,
}
