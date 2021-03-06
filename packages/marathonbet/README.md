[![npm](https://img.shields.io/npm/v/@betting-api/marathonbet)](https://www.npmjs.com/package/@betting-api/marathonbet)

MarathonBet bookmaker odds api. 

Api rest client for [betting-api.com](https://betting-api.com)

### Installation

`yarn add @betting-api/marathonbet`

or

`npm i -S @betting-api/marathonbet`


Then you can import it like:

```typescript
import marathonbet from '@betting-api/marathonbet'
// or
const marathonbet = require('@betting-api/marathonbet').default
```


### Authorization

To start using api, you need to create app at 
https://betting-api.com/console

Then:

```typescript
marathonbet.registerApp({
    secret_key: 'XXXXXXXXX',
})
```


### Methods

```typescript
const liveList = await marathonbet.football.getLiveAll()
const liveSingleMatch = await marathonbet.football.getLive(255860098)
const liveLeagues = await marathonbet.football.getLiveLeagues()
const liveLeagueMatches = await marathonbet.football.getLiveLeagueMatches('league_id')

const prematchList = await marathonbet.football.getPreMatchAll()
const prematchSingle = await marathonbet.football.getPreMatch(255860098)
const prematchLeagues = await marathonbet.football.getPreMatchLeagues()
const prematchLeagueMatches = await marathonbet.football.getPreMatchLeagueMatches('league_id')

const anyMatchSingle = await marathonbet.football.getMatch(255860098)
const serverInfo = await marathonbet.football.getInfo()
```



### Typescript

Project have typescript support and you may find useful to use it.

Types:
- `MarathonBetFootballMatch` - full match info
- `MarathonBetFootballLeague` - league info
