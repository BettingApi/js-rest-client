
### Installation

`yarn add @betting-api/betway`

or

`npm i @betting-api/betway -S`


Then you can import it like:

```typescript
import betWay from '@betting-api/betway'
// or
const betWay = require('@betting-api/betway').default
```


### Authorization

To start using api, you need to create app at 
https://betting-api.com/console

Then:

```typescript
betWay.registerApp({
    secret_key: 'XXXXXXXXX',
})
```


### Methods

```typescript
const liveList = await betWay.football.getLiveAll()
const liveSingleMatch = await betWay.football.getLive(255860098)
const prematchList = await betWay.football.getPreMatchAll()
const prematchSingle = await betWay.football.getPreMatch(255860098)
const anyMatchSingle = await betWay.football.getMatch(255860098)
const serverInfo = await betWay.football.getInfo()
```



### Typescript

Project have typescript support and you may find useful to use it.

Types:
- `BetWayFootballMatch` - full match info
