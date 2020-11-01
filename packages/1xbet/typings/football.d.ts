import { Bet, HandicapBet, TotalBet } from './bet'

export interface XBetFootballMatch extends XBetMatchInfo, BetsMeta {
    v: number
    markets: MatchMarkets
    title: string
    league: XBetLeague
}

export interface XBetMatchInfo {
    id: number
    team1: string
    team1_rus: string | null
    team1_id: number
    team2: string
    team2_rus: string | null
    team2_id: number
    date_start: string
    href: string
    score1: number
    score2: number
    isLive: boolean
    isComposite: boolean
    isSpecial: boolean
}

export interface BetsMeta {
    hash: string
    actual_at: string
}

export interface MatchMarkets extends MarketsMain, MarketsTotals, MarketsHandicaps, MarketsScore {
    half: {
        // 1: MatchMarketsHalf
    }
}

export interface XBetLeague {
    country_id?: number
    league_id: number
    sport_id: number
    name: string
    name_rus: string
    order_index: number
    isCyber: boolean
    isSimulated: boolean
    isSpecial: boolean
    special?: {
        isGroupStageStats: boolean
        isDailySpecials: boolean
        isSpecialBets: boolean
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
    totalsAsian: TotalBet[]
    totals1Asian: TotalBet[]
    totals2Asian: TotalBet[]
}

export interface MarketsHandicaps {
    handicaps1: HandicapBet[]
    handicaps2: HandicapBet[]
}

export interface MarketsScore {
    bothToScore: {
        yes?: Bet
        no?: Bet
    }
}
