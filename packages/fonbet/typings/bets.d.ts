import { EventFactor } from './sports'

export interface Bet extends EventFactor {
    value: number
}

export interface TotalBet {
    type: number
    over?: Bet
    under?: Bet
}

export interface HandicapBet extends Bet {
    type: number
}
