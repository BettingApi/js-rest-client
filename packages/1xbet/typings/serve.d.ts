import { XBetFootballMatch } from '../index'

export interface XBetFootballLeague extends Pick<XBetFootballMatch['league'], 'league_id' | 'country_id' |'isSimulated' | 'isCyber'> {
    title: string
    title_rus: string
    country: string
}
