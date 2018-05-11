import { CALL_API } from 'redux-api-middleware';

// --- Actions ---
export const REQUEST_EXAMPLES = '/examples/REQUEST';
export const SUCCESS_EXAMPLES = '/examples/SUCCESS';
export const FAILURE_EXAMPLES = '/examples/FAILURE';

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
export function fetchExamples() {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3000/publications/examples`,
      method: 'GET',
      types: [REQUEST_EXAMPLES, SUCCESS_EXAMPLES, FAILURE_EXAMPLES]
    }
  }
}

// Player
export function getPlayer(pseudo) {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3000/methods/players.get`,
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
      endpoint: `http://localhost:3000/methods/players.insert`,
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
