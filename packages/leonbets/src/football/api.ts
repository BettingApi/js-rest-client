import invariant from 'invariant'
import client from '../../client'
import { LeonBetsFootballMatch } from '../../typings/football'
import { LeonbetsLeagueItem } from '../../typings/serve'

async function getLive(id: string | number): Promise<LeonBetsFootballMatch | null> {
  invariant(id, `leonBets.getLive => invalid id: ${id}`)
  const { data } = await client.get(`/football/live/${id}`)
  return data
}

async function getLiveAll(): Promise<LeonBetsFootballMatch[]> {
  const { data } = await client.get('/football/live/all')
  return data
}

/** live or prematch * */
async function getMatch(id: string | number): Promise<LeonBetsFootballMatch | null> {
  invariant(id, `leonBets.getMatch => invalid id: ${id}`)
  const { data } = await client.get(`/football/match/${id}`)
  return data
}

async function getPreMatch(id: string | number): Promise<LeonBetsFootballMatch | null> {
  invariant(id, `leonBets.getPreMatch => invalid id: ${id}`)
  const { data } = await client.get(`/football/line/${id}`)
  return data
}

async function getPreMatchAll(): Promise<LeonBetsFootballMatch[]> {
  const { data } = await client.get('/football/line/all')
  return data
}

async function getPreMatchLeagues(): Promise<LeonbetsLeagueItem[]> {
  const { data } = await client.get('/football/line/leagues')
  return data
}

async function getPreMatchLeagueMatches(league_id: string | number): Promise<LeonBetsFootballMatch[]> {
  invariant(league_id, `leonBets.getPreMatchLeagueMatches => invalid id: ${league_id}`)
  const { data } = await client.get(`/football/line/league/${league_id}/matches`)
  return data
}

async function getLiveLeagues(): Promise<LeonbetsLeagueItem[]> {
  const { data } = await client.get('/football/live/leagues')
  return data
}

async function getLiveLeagueMatches(league_id: string | number): Promise<LeonBetsFootballMatch[]> {
  invariant(league_id, `leonBets.getLiveLeagueMatches => invalid id: ${league_id}`)
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
