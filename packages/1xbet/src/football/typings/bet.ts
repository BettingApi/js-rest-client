export interface Bet {
    v: number
}

export interface TotalBet {
    type: number
    over?: Bet
    under?: Bet
}

export interface HandicapBet extends Bet {
    type: number
}
