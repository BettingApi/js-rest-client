Multiple bookmakers odds api. 

Api rest client for [betting-api.com](https://betting-api.com)


### Installation

`yarn add @betting-api/all`

or

`npm i @betting-api/all -S`


Then you can import it like:

```typescript
import bettingApi from '@betting-api/all'
// or
const bettingApi = require('@betting-api/all').default
```

### Authorization

To start using api, you need to create app at 
https://betting-api.com/console

Then authorize all your clients by command:

```typescript
bettingApi.registerApp({
    secret_key: 'XXXXXXXXX',
})
```

### Methods

```typescript
const fonbetMatch = await bettingApi.fonbet.football.getLive('id')
const xBetMatch = await bettingApi.xbet.football.getLive('id')
const betwayMatch = await bettingApi.betway.football.getLive('id')
```


List of bookmakers and apis you can check 
[here](https://github.com/BettingApi/js-rest-client/tree/master/#readme)

