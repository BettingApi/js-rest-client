import { Bet, BetHandicap, TotalBet } from './bets'

export interface BetWayFootballMatch extends FootballMatchInfo, BetsMeta {
    v: number
    markets: MatchMarkets
}

export interface FootballMatchInfo {
    id: number
    team1: string
    team2: string
    country: string
    league: string
    href: string
    isLive: boolean
    date_start: string
    sportRadarId: number
}

export interface BetsMeta {
    hash: string
    actual_at: string
}

export interface MatchMarkets extends MarketsMain, MarketsTotals, MarketsHandicaps, MarketsCorners, MarketsScore {
    half: {
        1: MatchMarketsHalf
    }
}

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
    handicaps3Way1: BetHandicap[]
    handicaps3WayX: BetHandicap[]
    handicaps3Way2: BetHandicap[]
}

export interface MarketsCorners {
    cornersTotal: TotalBet[]
    cornersTotal1: TotalBet[]
    cornersTotal2: TotalBet[]
}

export interface MarketsScore {
    bothToScore: {
        yes?: Bet
        no?: Bet
    }
}

interface MatchMarketsHalf extends MarketsTotals, MarketsMain {}
