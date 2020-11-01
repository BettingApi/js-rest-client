import invariant from 'invariant'
import { MarathonBetFootballLeague } from '../..'
import client from '../../client'
import { MarathonBetFootballMatch } from '../../typings/football'

async function getLive(id: string | number): Promise<MarathonBetFootballMatch | null> {
  invariant(id, `marathonbet.getLive => invalid id: ${id}`)

  const { data } = await client.get(`/football/live/${id}`)
  return data
}

async function getLiveAll(): Promise<MarathonBetFootballMatch[]> {
  const { data } = await client.get('/football/live/all')
  return data
}

/**
 * @returns live or prematch
 */
async function getMatch(id: string | number): Promise<MarathonBetFootballMatch | null> {
  invariant(id, `marathonbet.getMatch => invalid id: ${id}`)

  const { data } = await client.get(`/football/match/${id}`)
  return data
}

async function getPreMatch(id: string | number): Promise<MarathonBetFootballMatch | null> {
  invariant(id, `marathonbet.getPreMatch => invalid id: ${id}`)

  const { data } = await client.get(`/football/line/${id}`)
  return data
}

async function getPreMatchAll(): Promise<MarathonBetFootballMatch[]> {
  const { data } = await client.get('/football/line/all')
  return data
}

async function getPreMatchLeagues(): Promise<MarathonBetFootballLeague[]> {
  const { data } = await client.get('/football/line/leagues')
  return data
}

async function getPreMatchLeagueMatches(league_id: string | number): Promise<MarathonBetFootballMatch[]> {
  invariant(league_id, `marathonbet.getPreMatchLeagueMatches => invalid id: ${league_id}`)
  const { data } = await client.get(`/football/line/league/${league_id}/matches`)
  return data
}

async function getLiveLeagues(): Promise<MarathonBetFootballLeague[]> {
  const { data } = await client.get('/football/live/leagues')
  return data
}

async function getLiveLeagueMatches(league_id: string | number): Promise<MarathonBetFootballMatch[]> {
  invariant(league_id, `marathonbet.getLiveLeagueMatches => invalid id: ${league_id}`)
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

  // prematch is not supported for now
  // getPreMatch,
  // getPreMatchAll,
  // getPreMatchLeagues,
  // getPreMatchLeagueMatches,

  getMatch,
  getInfo,
}
