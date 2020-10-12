Fonbet bookmaker odds api. 

Api rest client for [betting-api.com](https://betting-api.com)


### Installation

`yarn add @betting-api/fonbet`

or

`npm i -S @betting-api/fonbet`


Then you can import it like:

```typescript
import fonbet from '@betting-api/fonbet'
// or
const fonbet = require('@betting-api/fonbet').default
```


### Authorization

To start using api, you need to create app at 
https://betting-api.com/console

Then:

```typescript
fonbet.registerApp({
    secret_key: 'XXXXXXXXX',
})
```


### Methods

```typescript
const liveList = await fonbet.football.getLiveAll()
const liveSingleMatch = await fonbet.football.getLive(255860098)
const liveLeagues = await fonbet.football.getLiveLeagues()
const liveLeagueMatches = await fonbet.football.getLiveLeagueMatches(91)

const prematchList = await fonbet.football.getPreMatchAll()
const prematchSingle = await fonbet.football.getPreMatch(255860098)
const prematchLeagues = await fonbet.football.getPreMatchLeagues()
const prematchLeagueMatches = await fonbet.football.getPreMatchLeagueMatches(91)

const anyMatchSingle = await fonbet.football.getMatch(255860098)
const serverInfo = await fonbet.football.getInfo()
```



### Typescript

Project have typescript support and you may find useful to use it.

Types:
- `FonbetFootballMatch` - full match info
