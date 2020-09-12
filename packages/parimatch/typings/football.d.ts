import { PariMatchBet, PariMatchHandicapBet, PariMatchTotalBet } from './bets'

export interface PariMatchFootballMatch extends
    FootballTournamentInfo,
    Omit<FootballBetMain, 'total' | 'total1' | 'total2' | 'handicap1' | 'handicap2'>,
    FootballEventInfo,
    FootballOtherMarkets,
    BetsMeta {
    version: number
    half: null | FootballMatchBetHalf
    id: string
    href: string
}

interface FootballMatchBetHalf {
    [key: number]: FootballHalfBet
}

interface FootballHalfBet extends
    Pick<FootballBetMain, 'win1' | 'winX' | 'win2' | 'win1X' | 'win12' | 'winX2'> {
    handicaps1: PariMatchHandicapBet[]
    handicaps2: PariMatchHandicapBet[]
    totals: PariMatchTotalBet[]
}

export interface FootballTournamentInfo {
    title: string
    isCyber?: boolean
    isSimulation?: boolean
    isStats?: boolean
    gender: 'man' | 'women'
    country: string
    league: string
}

export interface FootballBetMain {
    win1?: PariMatchBet
    winX?: PariMatchBet
    win2?: PariMatchBet
    handicap1?: PariMatchHandicapBet
    handicap2?: PariMatchHandicapBet
    total?: PariMatchTotalBet
    total1?: PariMatchTotalBet
    total2?: PariMatchTotalBet
    isDisabled: boolean
    win1X?: PariMatchBet
    win12?: PariMatchBet
    winX2?: PariMatchBet
}

export interface FootballEventInfo {
    num?: number
    time_start: string
    date_start?: string
    team1: string
    team2: string
    score1: number
    score2: number
    minute: number
    isLine: boolean
    halfPoints: {
        [key: number]: {
            score1: number
            score2: number
        }
    }
}

export interface FootballOtherMarkets extends MarketTotalsBets, MarketHandicapBets {
    goals: Record<number, NextGoalBet>
    bothToScore: BothToScoreMarket
    correctGoals: CorrectGoalsMarket
    correctScore: CorrectScoreMarket
}

export interface BothToScoreMarket {
    yes?: PariMatchBet
    no?: PariMatchBet
}

export interface CorrectGoalsMarket {
    [key: number]: PariMatchBet
}

export interface CorrectScoreMarket {
    [key: number]: PariMatchBet
}

export interface NextGoalBet {
    num: number
    team1: PariMatchBet
    team2: PariMatchBet
    no: PariMatchBet
}

export interface BetsMeta {
    hash: string
    actual_at: string
}
