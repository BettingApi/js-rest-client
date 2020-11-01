import invariant from 'invariant'
import client from '../../client'
import { BetWayFootballMatch } from '../../typings/football'
import { BetWayFootballLeague } from '../../typings/serve'

async function getLive(id: string | number): Promise<BetWayFootballMatch | null> {
  invariant(id, `betWay.getLive => invalid id: ${id}`)
  const { data } = await client.get(`/football/live/${id}`)
  return data
}

async function getLiveAll(): Promise<BetWayFootballMatch[]> {
  const { data } = await client.get('/football/live/all')
  return data
}

/** live or prematch * */
async function getMatch(id: string | number): Promise<BetWayFootballMatch | null> {
  invariant(id, `betWay.getMatch => invalid id: ${id}`)
  const { data } = await client.get(`/football/match/${id}`)
  return data
}

async function getPreMatch(id: string | number): Promise<BetWayFootballMatch | null> {
  invariant(id, `betWay.getPreMatch => invalid id: ${id}`)

  const { data } = await client.get(`/football/line/${id}`)
  return data
}

async function getPreMatchAll(): Promise<BetWayFootballMatch[]> {
  const { data } = await client.get('/football/line/all')
  return data
}

async function getPreMatchLeagues(): Promise<BetWayFootballLeague[]> {
  const { data } = await client.get('/football/line/leagues')
  return data
}

async function getPreMatchLeagueMatches(league_id: string | number): Promise<BetWayFootballMatch[]> {
  invariant(league_id, `betWay.getPreMatchLeagueMatches => invalid id: ${league_id}`)
  const { data } = await client.get(`/football/line/league/${league_id}/matches`)
  return data
}

async function getLiveLeagues(): Promise<BetWayFootballLeague[]> {
  const { data } = await client.get('/football/live/leagues')
  return data
}

async function getLiveLeagueMatches(league_id: string | number): Promise<BetWayFootballMatch[]> {
  invariant(league_id, `betWay.getLiveLeagueMatches => invalid id: ${league_id}`)
  const { data } = await client.get(`/football/live/league/${league_id}/matches`)
  return data
}

async function getInfo(): Promise<{
    name: string
    version: string
}> {
  const { data } = await client.get('/football/info')
  return data
}

export default {
  getLive,
  getLiveAll,
  getLiveLeagues,
  getLiveLeagueMatches,

  getPreMatch,
  getPreMatchAll,
  getPreMatchLeagues,
  getPreMatchLeagueMatches,

  getMatch,
  getInfo,
}
