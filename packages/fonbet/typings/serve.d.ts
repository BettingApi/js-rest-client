import { FonbetFootballMatch } from '../index'

export type FonbetFootballLeagueInfo =
    Pick<FonbetFootballMatch, 'title' | 'country' | 'country_id' | 'league_id' | 'league'>
    & { isSpecial: boolean }
