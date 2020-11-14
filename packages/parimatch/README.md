[![npm](https://img.shields.io/npm/v/@betting-api/parimatch)](https://www.npmjs.com/package/@betting-api/parimatch)

PariMatch bookmaker odds api. 

Api rest client for [betting-api.com](https://betting-api.com)

### Installation

`yarn add @betting-api/parimatch`

or

`npm i -S @betting-api/parimatch`


Then you can import it like:

```typescript
import pariMatch from '@betting-api/parimatch'
// or
const pariMatch = require('@betting-api/parimatch').default
```


### Authorization

To start using api, you need to create app at 
https://betting-api.com/console

Then:

```typescript
pariMatch.registerApp({
    secret_key: 'XXXXXXXXX',
})
```


### Methods

```typescript
const liveList = await pariMatch.football.getLiveAll()
const liveSingleMatch = await pariMatch.football.getLive(255860098)
const liveLeagues = await pariMatch.football.getLiveLeagues()
const liveLeagueMatches = await pariMatch.football.getLiveLeagueMatches('league_id')

const prematchList = await pariMatch.football.getPreMatchAll()
const prematchSingle = await pariMatch.football.getPreMatch(255860098)
const prematchLeagues = await pariMatch.football.getPreMatchLeagues()
const prematchLeagueMatches = await pariMatch.football.getPreMatchLeagueMatches('league_id')

const anyMatchSingle = await pariMatch.football.getMatch(255860098)
const serverInfo = await pariMatch.football.getInfo()
```



### Typescript

Project have typescript support and you may find useful to use it.

Types:
- `PariMatchFootballMatch` - full match info
- `PariMatchFootballLeague` - league info
