export enum RouteEnum {
  HOME = "/",
  CREATE_ROOM = "/create-room",
  JOIN_ROOM = "/join-room",
  WAITING_ROOM = "/waiting-room",
  GAME = "/game",
}

export enum LocalStorageKeyEnum {
  TIMER_LIMIT = "timer_limit",
  USERNAME = "username",
  ROOM_CODE = "room_code",
  PLAYER_ID = "player_id",
}

export enum GamePhaseEnum {
  WAITING = "waiting",
  NIGHT = "night",
  DAY = "day",
  VOTING = "voting",
  ENDED = "ended",
}

export enum TeamEnum {
  VILLAGER = "villager",
  WEREWOLF = "werewolf",
  NEUTRAL = "neutral",
}
