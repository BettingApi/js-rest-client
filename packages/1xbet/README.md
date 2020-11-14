[![npm](https://img.shields.io/npm/v/@betting-api/1xbet)](https://www.npmjs.com/package/@betting-api/1xbet)

1xBet bookmaker odds api. 

Api rest client for [betting-api.com](https://betting-api.com)

### Installation

`yarn add @betting-api/1xbet`

or

`npm i @betting-api/1xbet -S`


Then you can import it like:

```typescript
import xBet from '@betting-api/1xbet'
// or
const xBet = require('@betting-api/1xbet').default
```


### Authorization

To start using api, you need to create app at 
https://betting-api.com/console

Then:

```typescript
xBet.registerApp({
    secret_key: 'XXXXXXXXX',
})
```


### Methods

```typescript
const liveList = await xBet.football.getLiveAll()
const liveSingleMatch = await xBet.football.getLive(255860098)
const liveLeagues = await xBet.football.getLiveLeagues()
const liveLeagueMatches = await xBet.football.getLiveLeagueMatches(91)

const prematchList = await xBet.football.getPreMatchAll()
const prematchSingle = await xBet.football.getPreMatch(255860098)
const prematchLeagues = await xBet.football.getPreMatchLeagues()
const prematchLeagueMatches = await xBet.football.getPreMatchLeagueMatches(91)

const anyMatchSingle = await xBet.football.getMatch(255860098)
const serverInfo = await xBet.football.getInfo()
```


### Typescript

Project have typescript support and you may find useful to use it.

Types:
- `XBetFootballMatch` - full match info
