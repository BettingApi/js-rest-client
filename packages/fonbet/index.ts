import client from './client'
import apis from './src/apis'
import { FonbetFootballMatch } from './typings/football'

function registerApp({ secret_key }: { secret_key: string}) {
  client.defaults.headers.authorization = secret_key
}

export { FonbetFootballMatch }

export default {
  registerApp,
  ...apis,
}
