import { BetsMeta } from './meta'

export interface MarathonBetFootballMatch extends TitleInfo, MembersInfo, ScoreInfo, BetWin, BetsMeta {
    id: string
    version: number
    href: string
    markets?: Markets | null
}

export interface TitleInfo {
    title: string
    country: string
    league: string
}

export interface MembersInfo {
    team1: string
    team2: string
    date_start?: string
    isLine: boolean
}

export interface ScoreInfo extends Scores {
    halfScores: HalfListScores
}

interface Scores {
    score1: number
    score2: number
}

interface HalfListScores {
    [key: number]: Scores
}

export interface BetWin {
    win1?: number
    winX?: number
    win2?: number
}
