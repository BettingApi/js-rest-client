import client from './client'
import apis from './src/apis'
import { MarathonBetFootballMatch } from './typings/football'
import { MarathonBetFootballLeague } from './typings/serve'

function registerApp({ secret_key }: { secret_key: string}) {
  client.defaults.headers.authorization = secret_key
}

export { MarathonBetFootballMatch, MarathonBetFootballLeague }

export default {
  registerApp,
  ...apis,
}
