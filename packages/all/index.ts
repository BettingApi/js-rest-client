import xbet from '@betting-api/1xbet'
import betway from '@betting-api/betway'
import fonbet from '@betting-api/fonbet'
import ggbet from '@betting-api/ggbet'
import leonbets from '@betting-api/leonbets'
import marathonbet from '@betting-api/marathonbet'
import parimatch from '@betting-api/parimatch'
import sbobet from '@betting-api/sbobet'

export * from '@betting-api/ggbet'
export * from '@betting-api/parimatch'
export * from '@betting-api/leonbets'
export * from '@betting-api/fonbet'
export * from '@betting-api/marathonbet'
export * from '@betting-api/sbobet'
export * from '@betting-api/1xbet'
export * from '@betting-api/betway'

export function registerApp({ secret_key }: { secret_key: string}) {
  xbet.registerApp({ secret_key })
  leonbets.registerApp({ secret_key })
  sbobet.registerApp({ secret_key })
  ggbet.registerApp({ secret_key })
  betway.registerApp({ secret_key })
  parimatch.registerApp({ secret_key })
  marathonbet.registerApp({ secret_key })
  fonbet.registerApp({ secret_key })
}

export {
  xbet,
  leonbets,
  sbobet,
  ggbet,
  betway,
  parimatch,
  marathonbet,
  fonbet,
}

export default {
  registerApp,
  '1xbet': xbet,
  xbet,
  leonbets,
  sbobet,
  ggbet,
  betway,
  parimatch,
  marathonbet,
  fonbet,
}
