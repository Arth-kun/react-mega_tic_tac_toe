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

//Player
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

export const REQUEST_CREATE_LOBBY = '/lobbies/REQUEST_CREATE';
export const SUCCESS_CREATE_LOBBY = '/lobbies/SUCCESS_CREATE';
export const FAILURE_CREATE_LOBBY = '/lobbies/FAILURE_CREATE';

export const REQUEST_JOIN_LOBBY = '/lobbies/REQUEST_JOIN';
export const SUCCESS_JOIN_LOBBY = '/lobbies/SUCCESS_JOIN';
export const FAILURE_JOIN_LOBBY = '/lobbies/FAILURE_JOIN';

export const REQUEST_CLOSE_LOBBY = '/lobbies/REQUEST_CLOSE';
export const SUCCESS_CLOSE_LOBBY = '/lobbies/SUCCESS_CLOSE';
export const FAILURE_CLOSE_LOBBY = '/lobbies/FAILURE_CLOSE';


// --- Actions creators ---

// Player
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
      endpoint: `http://localhost:3000/publications/lobbies`,
      method: 'GET',
      types: [REQUEST_GET_LOBBIES, SUCCESS_GET_LOBBIES, FAILURE_GET_LOBBIES]
    }
  }
}

export function createLobby() {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3000/publications/lobbies`,
      method: 'GET',
      types: [REQUEST_GET_LOBBIES, SUCCESS_GET_LOBBIES, FAILURE_GET_LOBBIES]
    }
  }
}

export function joinLobby() {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3000/publications/lobbies`,
      method: 'GET',
      types: [REQUEST_GET_LOBBIES, SUCCESS_GET_LOBBIES, FAILURE_GET_LOBBIES]
    }
  }
}

export function closeLobby() {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3000/publications/lobbies`,
      method: 'GET',
      types: [REQUEST_GET_LOBBIES, SUCCESS_GET_LOBBIES, FAILURE_GET_LOBBIES]
    }
  }
}
