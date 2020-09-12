export interface Sport {
    id: number
    parentId?: number
    sortOrder: string
    name: string
    kind: 'sport' | 'segment'
}

export interface SportEvent {
    id: number
    parentId: number
    sortOrder: string
    level: 1 | 2 | 3
    num: number
    sportId: number
    kind: number
    rootKind: number
    team1Id: number
    team2Id: number
    team1?: string
    team2?: string
    name: string
    namePrefix: string
    startTime: number
    place: 'line' | 'live'
    priority: number
    statisticsType: 'BetRadar'
}

export interface PreMatchList {
    sports: Sport[]
    events: SportEvent[]
    customFactors: EventFactor[]
}

export interface InPlayList {
    sports: Sport[]
    events: SportEvent[]
    customFactors: EventFactor[]
    eventBlocks: EventBlock[]
    eventMiscs: EventMisc[]
    announcements: EventAnnounce[]
}

export interface EventFactor {
    'e': number
    'f': number
    'v': number
    'p'?: number
    'pt'?: string
}

export interface EventBlock {
    'eventId': number
    'state': 'blocked'
}

export interface EventMisc {
    'id': number
    'liveDelay': number
    'score1': number
    'score2': number
    'dontShowScore': boolean
    'comment': string
    'timerDirection'?: number
    'timerSeconds'?: number
    timerUpdateTimestamp?: number
    'timerUpdateTimestampMsec'?: number
}

export interface EventAnnounce {
    'id': number
    'num': number
    'segmentId': number
    'segmentName': 'Hockey. Short-hockey. DDivision Comet.3x10.Tourn.4'
    'sportId': 2
    'regionId': number
    'segmentSortOrder': '1+++I+++0&zzmh+++D-4nE-PZs'
    'team1Id': number
    'team2Id': number
    'team1': string
    'team2': string
    'statisticsType': 'BetRadar'
    'name': string
    'namePrefix': string
    'startTime': number
    'place': 'line'
    'tv': [
        8
    ]
}
