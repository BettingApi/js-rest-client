import client from './client'
import apis from './src/apis'
import { GGBetFootballMatch } from './typings/football'
import { GGBetFootballLeague } from './typings/serve'

function registerApp({ secret_key }: { secret_key: string}) {
  client.defaults.headers.authorization = secret_key
}

export { GGBetFootballMatch, GGBetFootballLeague }

export default {
  registerApp,
  ...apis,
}
