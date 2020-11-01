import { BetWayFootballMatch } from './football'

export interface BetWayFootballLeague extends Pick<BetWayFootballMatch, 'league' | 'country'>{
    league_id: string
    title: string
}
