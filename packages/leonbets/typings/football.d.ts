import { Bet, BetHandicap, BetTotal } from './bets'

export interface LeonBetsFootballMatch extends MatchMarkets, LiveStatus, BetsMeta {
    version: number
    id: number
    title: string
    team1: string
    team1_id: number
    team2: string
    team2_id: number
    isOpen: boolean
    href: string
    date_start: string
    betline: 'inplay' | 'prematch'
    country: string
    league: string
    league_id: number
}

export interface MatchMarkets {
    win1?: Bet
    winX?: Bet
    win2?: Bet
    win1X?: Bet
    win12?: Bet
    winX2?: Bet
    handicaps1: BetHandicap[]
    handicaps2: BetHandicap[]
    totals: BetTotal[]
    totalsAsian: BetTotal[]
    totals1: BetTotal[]
    totals2: BetTotal[]
    half: {
        1: HalfBets
        2?: HalfBets
    }
    bothToScore?: {
        yes: Bet
        no: Bet
    }
}

interface HalfBets {
    handicaps1: BetHandicap[]
    handicaps2: BetHandicap[]
    totals: BetTotal[]
}

export interface LiveStatus {
    score1: number
    score2: number
    minute: number
}

export interface BetsMeta {
    hash: string
    actual_at: string
}
