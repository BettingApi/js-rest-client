import client from './client'
import apis from './src/apis'
import { BetWayFootballMatch } from './typings/football'
import { BetWayFootballLeague } from './typings/serve'

function registerApp({ secret_key }: { secret_key: string}) {
  client.defaults.headers.authorization = secret_key
}

export { BetWayFootballMatch, BetWayFootballLeague }

export default {
  registerApp,
  ...apis,
}
