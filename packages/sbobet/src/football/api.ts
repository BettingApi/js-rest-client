import client from '../../client'
import { SbobetFootballMatch } from '../../typings/football'

async function getLive(id: string | number): Promise<SbobetFootballMatch | null> {
  const { data } = await client.get(`/football/live/${id}`)
  return data
}

async function getLiveAll(): Promise<SbobetFootballMatch[]> {
  const { data } = await client.get('/football/live/all')
  return data
}

async function getMatch(id: string | number): Promise<SbobetFootballMatch | null> {
  /** live or prematch * */
  const { data } = await client.get(`/football/match/${id}`)
  return data
}

async function getPreMatch(id: string | number): Promise<SbobetFootballMatch | null> {
  const { data } = await client.get(`/football/line/${id}`)
  return data
}

async function getPreMatchAll(): Promise<SbobetFootballMatch[]> {
  const { data } = await client.get('/football/line/all')
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
  getPreMatch,
  getPreMatchAll,
  getMatch,
  getInfo,
}
