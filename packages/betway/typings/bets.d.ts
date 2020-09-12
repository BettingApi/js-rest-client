export interface Bet {
    v: number
    value: number
}

export interface TotalBet {
    type: number
    over?: Bet
    under?: Bet
}

export interface HandicapBet {
    type: number
    value: Bet
}

export interface BetHandicap {
    type: number
    value: number
}
