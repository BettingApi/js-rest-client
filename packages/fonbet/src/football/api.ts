import invariant from 'invariant'
import client from '../../client'
import { FonbetFootballMatch } from '../../typings/football'
import { FonbetFootballLeagueInfo } from '../../typings/serve'

async function getLive(id: string | number): Promise<FonbetFootballMatch | null> {
  invariant(id, `fonbet.getLive => invalid id: ${id}`)
  const { data } = await client.get(`/football/live/${id}`)
  return data
}

async function getLiveAll(params?: { team_id?: string | number }): Promise<FonbetFootballMatch[]> {
  const { data } = await client.get('/football/live/all', {
    params,
  })
  return data
}

async function getMatch(id: string | number): Promise<FonbetFootballMatch | null> {
  invariant(id, `fonbet.getMatch => invalid id: ${id}`)
  /** live or prematch * */
  const { data } = await client.get(`/football/match/${id}`)
  return data
}

async function getPreMatch(id: string | number): Promise<FonbetFootballMatch | null> {
  invariant(id, `fonbet.getPreMatch => invalid id: ${id}`)
  const { data } = await client.get(`/football/line/${id}`)
  return data
}

async function getPreMatchAll(params?: { team_id?: string | number }): Promise<FonbetFootballMatch[]> {
  const { data } = await client.get('/football/line/all', {
    params,
  })
  return data
}

async function getPreMatchLeagues(): Promise<FonbetFootballLeagueInfo[]> {
  const { data } = await client.get('/football/line/leagues')
  return data
}

async function getPreMatchLeagueMatches(league_id: string | number): Promise<FonbetFootballMatch[]> {
  invariant(league_id, `fonbet.getPreMatchLeagueMatches => invalid id: ${league_id}`)
  const { data } = await client.get(`/football/line/league/${league_id}/matches`)
  return data
}

async function getLiveLeagues(): Promise<FonbetFootballLeagueInfo[]> {
  const { data } = await client.get('/football/live/leagues')
  return data
}

async function getLiveLeagueMatches(league_id: string | number): Promise<FonbetFootballMatch[]> {
  invariant(league_id, `fonbet.getLiveLeagueMatches => invalid id: ${league_id}`)
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
