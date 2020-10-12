import { Bet, HandicapBet, TotalBet } from './bets'
import { BetsMeta } from './meta'
import { SportEvent } from './sports'

export interface FonbetFootballMatch extends SportEvent, MatchMisk, MatchLeagueInfo, BetsMeta {
    version: number
    markets: MatchMarkets
    team1: string
    team2: string
    team1_id: number
    team2_id: number
    date_start: string
    hash: string
}

export interface MatchMisk {
    score1?: number
    score2?: number
    minute?: number
}

export interface MatchLeagueInfo {
    title: string
    country: string
    league: string
    href: string
    isCyber: boolean
    league_id: number
    country_id?: number
    isSpecial: boolean
}

export interface MatchMarkets extends MarketsMain, MarketsTotals, MarketsScores, MarketsHandicaps {
    // half: {
    //     1: HalfBets
    //     2?: HalfBets
    // }
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

export interface MarketsScores {
    bothToScore: {
        yes?: Bet
        no?: Bet
    }
}

export interface MarketsHandicaps {
    handicaps1: HandicapBet[]
    handicaps2: HandicapBet[]
}
