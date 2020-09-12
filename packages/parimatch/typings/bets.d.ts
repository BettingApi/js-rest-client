export interface PariMatchBet {
    id: string
    value: number
}

export interface PariMatchHandicapBet extends PariMatchBet {
    type: number
}

export interface PariMatchTotalBet {
    type: number
    over: PariMatchBet
    under: PariMatchBet
}
