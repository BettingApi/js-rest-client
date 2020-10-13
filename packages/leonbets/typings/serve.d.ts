import { LeonBetsFootballMatch } from '../index'

export interface LeonbetsLeagueItem extends Pick<LeonBetsFootballMatch, 'league' | 'league_id' | 'country' | 'title'> {}
