// This is where all the Actions and Action Creators are stored
// It's a usual practice to store them all in the same place
// But another practice, which is better on larger app,
// is to separate the actions per action type and store
// them with the reducer, google "redux ducks" for more info

// We use redux-api-middleware to handle all the API calls
import { CALL_API } from 'redux-api-middleware';

// Change the url by my computer's ip address
const SERVER_URL = 'http://localhost:3000';

// The player part of the file is already done to help you,
// But the lobbies part is not operational at all

// --- Actions ---

//Player Actions
export const REQUEST_GET_PLAYER = '/player/REQUEST_GET';
export const SUCCESS_GET_PLAYER = '/player/SUCCESS_GET';
export const FAILURE_GET_PLAYER = '/player/FAILURE_GET';

export const REQUEST_CREATE_PLAYER = '/player/REQUEST_CREATE';
export const SUCCESS_CREATE_PLAYER = '/player/SUCCESS_CREATE';
export const FAILURE_CREATE_PLAYER = '/player/FAILURE_CREATE';

// Lobbies
export const REQUEST_GET_LOBBIES = '/lobbies/REQUEST_GET';
export const SUCCESS_GET_LOBBIES = '/lobbies/SUCCESS_GET';
export const FAILURE_GET_LOBBIES = '/lobbies/FAILURE_GET';

export const REQUEST_GET_LOBBY = '/lobbies/REQUEST_GET_ONE';
export const SUCCESS_GET_LOBBY = '/lobbies/SUCCESS_GET_ONE';
export const FAILURE_GET_LOBBY = '/lobbies/FAILURE_GET_ONE';

export const REQUEST_CREATE_LOBBY = '/lobbies/REQUEST_CREATE';
export const SUCCESS_CREATE_LOBBY = '/lobbies/SUCCESS_CREATE';
export const FAILURE_CREATE_LOBBY = '/lobbies/FAILURE_CREATE';

export const REQUEST_JOIN_LOBBY = '/lobbies/REQUEST_JOIN';
export const SUCCESS_JOIN_LOBBY = '/lobbies/SUCCESS_JOIN';
export const FAILURE_JOIN_LOBBY = '/lobbies/FAILURE_JOIN';

export const REQUEST_PLAY_LOBBY = '/lobbies/REQUEST_PLAY';
export const SUCCESS_PLAY_LOBBY = '/lobbies/SUCCESS_PLAY';
export const FAILURE_PLAY_LOBBY = '/lobbies/FAILURE_PLAY';

export const REQUEST_RESTART_LOBBY = '/lobbies/REQUEST_RESTART';
export const SUCCESS_RESTART_LOBBY = '/lobbies/SUCCESS_RESTART';
export const FAILURE_RESTART_LOBBY = '/lobbies/FAILURE_RESTART';

export const REQUEST_LEAVE_LOBBY = '/lobbies/REQUEST_LEAVE';
export const SUCCESS_LEAVE_LOBBY = '/lobbies/SUCCESS_LEAVE';
export const FAILURE_LEAVE_LOBBY = '/lobbies/FAILURE_LEAVE';


// --- Actions creators ---

// Player Action Creators
export function getPlayer(pseudo) {
  return {
    [CALL_API]: {
      endpoint: `${SERVER_URL}/methods/players.get`,
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pseudo }),
      types: [REQUEST_GET_PLAYER, SUCCESS_GET_PLAYER, FAILURE_GET_PLAYER]
    }
  }
}

export function createPlayer(pseudo) {
  return {
    [CALL_API]: {
      endpoint: `${SERVER_URL}/methods/players.insert`,
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pseudo }),
      types: [REQUEST_CREATE_PLAYER, SUCCESS_CREATE_PLAYER, FAILURE_CREATE_PLAYER]
    }
  }
}

// Lobbies
export function getLobbies() {
  return {
    [CALL_API]: {
      endpoint: `${SERVER_URL}/methods/lobbies.getAll`,
      method: 'POST',
      types: [REQUEST_GET_LOBBIES, SUCCESS_GET_LOBBIES, FAILURE_GET_LOBBIES]
    }
  }
}

export function getLobby(lobbyId) {
  return {
    [CALL_API]: {
      endpoint: `${SERVER_URL}/methods/lobbies.getOne`,
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: lobbyId }),
      types: [REQUEST_GET_LOBBY, SUCCESS_GET_LOBBY, FAILURE_GET_LOBBY]
    }
  }
}

export function createLobby(playerOne) {
  return {
    [CALL_API]: {
      endpoint: `${SERVER_URL}/methods/lobbies.create`,
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ playerOne }),
      types: [REQUEST_CREATE_LOBBY, SUCCESS_CREATE_LOBBY, FAILURE_CREATE_LOBBY]
    }
  }
}

export function joinLobby(lobbyId, playerTwo) {
  return {
    [CALL_API]: {
      endpoint: `${SERVER_URL}/methods/lobbies.join`,
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: lobbyId, playerTwo }),
      types: [REQUEST_JOIN_LOBBY, SUCCESS_JOIN_LOBBY, FAILURE_JOIN_LOBBY]
    }
  }
}

export function play(lobbyId, player, squareClicked) {
  return {
    [CALL_API]: {
      endpoint: `${SERVER_URL}/methods/lobbies.play`,
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: lobbyId, player, squareClicked }),
      types: [REQUEST_PLAY_LOBBY, SUCCESS_PLAY_LOBBY, FAILURE_PLAY_LOBBY]
    }
  }
}

export function restartGame(lobbyId) {
  return {
    [CALL_API]: {
      endpoint: `${SERVER_URL}/methods/lobbies.restart`,
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: lobbyId }),
      types: [REQUEST_RESTART_LOBBY, SUCCESS_RESTART_LOBBY, FAILURE_RESTART_LOBBY]
    }
  }
}

export function leaveLobby(lobbyId, player) {
  return {
    [CALL_API]: {
      endpoint: `${SERVER_URL}/methods/lobbies.leave`,
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: lobbyId, player }),
      types: [REQUEST_LEAVE_LOBBY, SUCCESS_LEAVE_LOBBY, FAILURE_LEAVE_LOBBY]
    }
  }
}
