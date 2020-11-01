import client from './client'
import apis from './src/apis'
import { PariMatchFootballMatch } from './typings/football'
import { PariMatchFootballLeague } from './typings/serve'

function registerApp({ secret_key }: { secret_key: string}) {
  client.defaults.headers.authorization = secret_key
}

export { PariMatchFootballMatch, PariMatchFootballLeague }

export default {
  registerApp,
  ...apis,
}
