
### Installation

`yarn add @betting-api/ggbet`

or

`npm i -S @betting-api/ggbet`


Then you can import it like:

```typescript
import ggBet from '@betting-api/ggbet'
// or
const ggBet = require('@betting-api/ggbet').default
```


### Authorization

To start using api, you need to create app at 
https://betting-api.com/console

Then:

```typescript
ggBet.registerApp({
    secret_key: 'XXXXXXXXX',
})
```


### Methods

```typescript
const liveList = await ggBet.football.getLiveAll()
const liveSingleMatch = await ggBet.football.getLive(255860098)
const prematchList = await ggBet.football.getPreMatchAll()
const prematchSingle = await ggBet.football.getPreMatch(255860098)
const anyMatchSingle = await ggBet.football.getMatch(255860098)
const serverInfo = await ggBet.football.getInfo()
```



### Typescript

Project have typescript support and you may find useful to use it.

Types:
- `GGBetFootballMatch` - full match info