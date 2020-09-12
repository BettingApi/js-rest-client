export interface Bet {
    v: number
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

interface BetHandicap {
    type: number
    v: number
}
