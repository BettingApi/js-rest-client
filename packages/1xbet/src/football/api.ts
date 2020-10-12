import invariant from 'invariant'
import client from '../../client'
import { XBetFootballMatch } from '../../typings/football'
import { XBetFootballLeague } from '../../typings/serve'

async function getLive(id: string | number): Promise<XBetFootballMatch | null> {
  invariant(id, `1xbet.getLive => invalid id: ${id}`)
  const { data } = await client.get(`/football/live/${id}`)
  return data
}

async function getLiveAll(params?: { team_id?: string | number }): Promise<XBetFootballMatch[]> {
  const { data } = await client.get('/football/live/all', {
    params,
  })
  return data
}

async function getMatch(id: string | number): Promise<XBetFootballMatch | null> {
  invariant(id, `1xbet.getMatch => invalid id: ${id}`)
  /** live or prematch * */
  const { data } = await client.get(`/football/match/${id}`)
  return data
}

async function getPreMatch(id: string | number): Promise<XBetFootballMatch | null> {
  invariant(id, `1xbet.getPreMatch => invalid id: ${id}`)
  const { data } = await client.get(`/football/line/${id}`)
  return data
}

async function getPreMatchAll(params?: { team_id?: string | number }): Promise<XBetFootballMatch[]> {
  const { data } = await client.get('/football/line/all', {
    params,
  })
  return data
}

async function getPreMatchLeagues(): Promise<XBetFootballLeague[]> {
  const { data } = await client.get('/football/line/leagues')
  return data
}

async function getPreMatchLeagueMatches(league_id: string | number): Promise<XBetFootballMatch[]> {
  invariant(league_id, `xBet.getPreMatchLeagueMatches => invalid id: ${league_id}`)
  const { data } = await client.get(`/football/line/league/${league_id}/matches`)
  return data
}

async function getLiveLeagues(): Promise<XBetFootballLeague[]> {
  const { data } = await client.get('/football/live/leagues')
  return data
}

async function getLiveLeagueMatches(league_id: string | number): Promise<XBetFootballMatch[]> {
  invariant(league_id, `xBet.getLiveLeagueMatches => invalid id: ${league_id}`)
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
