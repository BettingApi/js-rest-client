
### Installation

`yarn add @betting-api/sbobet`

or

`npm i -S @betting-api/sbobet`


Then you can import it like:

```typescript
import sbobet from '@betting-api/sbobet'
// or
const sbobet = require('@betting-api/sbobet').default
```


### Authorization

To start using api, you need to create app at 
https://betting-api.com/console

Then:

```typescript
sbobet.registerApp({
    secret_key: 'XXXXXXXXX',
})
```


### Methods

```typescript
const liveList = await sbobet.football.getLiveAll()
const liveSingleMatch = await sbobet.football.getLive(255860098)
const prematchList = await sbobet.football.getPreMatchAll()
const prematchSingle = await sbobet.football.getPreMatch(255860098)
const anyMatchSingle = await sbobet.football.getMatch(255860098)
const serverInfo = await sbobet.football.getInfo()
```



### Typescript

Project have typescript support and you may find useful to use it.

Types:
- `SbobetFootballMatch` - full match info