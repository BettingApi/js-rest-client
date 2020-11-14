LeonBets bookmaker odds api. 

Api rest client for [betting-api.com](https://betting-api.com)

[![npm](https://img.shields.io/npm/v/@betting-api/leonbets)](https://www.npmjs.com/package/@betting-api/leonbets)

### Installation

`yarn add @betting-api/leonbets`

or

`npm i -S @betting-api/leonbets`


Then you can import it like:

```typescript
import leonBets from '@betting-api/leonbets'
// or
const leonBets = require('@betting-api/leonbets').default
```


### Authorization

To start using api, you need to create app at 
https://betting-api.com/console

Then:

```typescript
leonBets.registerApp({
    secret_key: 'XXXXXXXXX',
})
```


### Methods

```typescript
const liveList = await leonBets.football.getLiveAll()
const liveSingleMatch = await leonBets.football.getLive(255860098)
const liveLeagues = await leonBets.football.getLiveLeagues()
const liveLeagueMatches = await leonBets.football.getLiveLeagueMatches(91)

const prematchList = await leonBets.football.getPreMatchAll()
const prematchSingle = await leonBets.football.getPreMatch(255860098)
const prematchLeagues = await leonBets.football.getPreMatchLeagues()
const prematchLeagueMatches = await leonBets.football.getPreMatchLeagueMatches(91)

const anyMatchSingle = await leonBets.football.getMatch(255860098)
const serverInfo = await leonBets.football.getInfo()
```



### Typescript

Project have typescript support and you may find useful to use it.

Types:
- `LeonBetsFootballMatch` - full match info
