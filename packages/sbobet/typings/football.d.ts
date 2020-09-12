import { HandicapBet, TotalBet } from './bets'
import { BetsMeta } from './meta'

export interface SbobetFootballMatch extends SbobetMatchItem, BetsMeta {
    v: number
    markets: MatchMarkets
}

export interface SbobetMatchItem {
    id: number
    team1: string
    team2: string
    isCyber: boolean
    sport_id?: number
    tournament: Tournament
    date_start: string
    href: string
    title: string
    score1: number
    score2: number
}

interface MatchMarketsHalf extends MarketsTotals, MarketsHandicaps {}

export interface MatchMarkets extends MarketsMain, MarketsTotals, MarketsSpecials, MarketsHandicaps {
    half: {
        1: MatchMarketsHalf
    }
}

export interface MarketsMain {
    win1?: number
    winX?: number
    win2?: number
    win1X?: number
    win12?: number
    winX2?: number
}

export interface MarketsTotals {
    totals: TotalBet[]
}

export interface MarketsSpecials {
    cornersTotal: TotalBet[]
}

export interface MarketsHandicaps {
    handicaps1: HandicapBet[]
    handicaps2: HandicapBet[]
}
