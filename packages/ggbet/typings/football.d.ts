import {Bet, BetHandicap, TotalBet} from './bets'
import { BetsMeta } from './meta'

export interface GGBetFootballMatch extends GGBetFootballMatchInfo, BetsMeta {
    v: number
    markets: MatchMarkets
    hash: string
}

export interface GGBetFootballMatchInfo {
    id: string
    slug: string
    href: string
    date_start: string
    title: string
    score1: number
    score2: number
    isLive: boolean
    team1_id: string
    team1: string
    team2_id: string
    team2: string
    league: string
}

export interface MatchMarkets extends MarketsMain, MarketsTotals, MarketsHandicaps, MarketsScore {
    half: {
        1: MatchMarketsHalf
    }
}
interface MatchMarketsHalf extends MarketsTotals, MarketsMain {}

export interface MarketsMain {
    win1?: Bet
    winX?: Bet
    win2?: Bet
    win1X?: Bet
    win12?: Bet
    winX2?: Bet
}

export interface MarketsTotals {
    totals: TotalBet[]
    totals1: TotalBet[]
    totals2: TotalBet[]
}

export interface MarketsHandicaps {
    handicaps1: BetHandicap[]
    handicaps2: BetHandicap[]
}

export interface MarketsScore {
    bothToScore: {
        yes?: Bet
        no?: Bet
    }
}
