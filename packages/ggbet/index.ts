import client from './client'
import apis from './src/apis'
import { GGBetFootballMatch } from './typings/football'

function registerApp({ secret_key }: { secret_key: string}) {
  client.defaults.headers.authorization = secret_key
}

export { GGBetFootballMatch }

export default {
  registerApp,
  ...apis,
}
