import {
  REQUEST_GET_LOBBIES,
  SUCCESS_GET_LOBBIES,
  FAILURE_GET_LOBBIES,
  REQUEST_GET_LOBBY,
  SUCCESS_GET_LOBBY,
  FAILURE_GET_LOBBY,
  REQUEST_CREATE_LOBBY,
  SUCCESS_CREATE_LOBBY,
  FAILURE_CREATE_LOBBY,
  REQUEST_JOIN_LOBBY,
  SUCCESS_JOIN_LOBBY,
  FAILURE_JOIN_LOBBY,
  REQUEST_PLAY_LOBBY,
  SUCCESS_PLAY_LOBBY,
  FAILURE_PLAY_LOBBY,
  REQUEST_RESTART_LOBBY,
  SUCCESS_RESTART_LOBBY,
  FAILURE_RESTART_LOBBY,
  REQUEST_LEAVE_LOBBY,
  SUCCESS_LEAVE_LOBBY,
  FAILURE_LEAVE_LOBBY,
} from '../actions/index';

const INITIAL_STATE = { lobbies: [], lobby: {}, error: null, loading: false };

export default function reducer(state = INITIAL_STATE, { type, payload: { lobbies = [], lobby = {}, message } = {} }) {
  switch (type) {
    case REQUEST_GET_LOBBIES:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_GET_LOBBIES:
      return {
        ...state,
        lobbies,
        loading: false
      };
    case FAILURE_GET_LOBBIES:
      return {
        ...state,
        loading: false,
        error: message
      };
    case REQUEST_GET_LOBBY:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_GET_LOBBY:
      return {
        ...state,
        lobby,
        loading: false
      };
    case FAILURE_GET_LOBBY:
      return {
        ...state,
        loading: false,
        error: message
      };
    case REQUEST_CREATE_LOBBY:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_CREATE_LOBBY:
      return {
        ...state,
        lobby,
        loading: false
      };
    case FAILURE_CREATE_LOBBY:
      return {
        ...state,
        loading: false,
        error: message
      };
    case REQUEST_JOIN_LOBBY:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_JOIN_LOBBY:
      return {
        ...state,
        lobby,
        loading: false
      };
    case FAILURE_JOIN_LOBBY:
      return {
        ...state,
        loading: false,
        error: message
      };
    case REQUEST_PLAY_LOBBY:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_PLAY_LOBBY:
      return {
        ...state,
        loading: false
      };
    case FAILURE_PLAY_LOBBY:
      return {
        ...state,
        loading: false,
        error: message
      };
    case REQUEST_RESTART_LOBBY:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_RESTART_LOBBY:
      return {
        ...state,
        loading: false
      };
    case FAILURE_RESTART_LOBBY:
      return {
        ...state,
        loading: false,
        error: message
      };
    case REQUEST_LEAVE_LOBBY:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_LEAVE_LOBBY:
      return {
        ...state,
        lobby,
        loading: false
      };
    case FAILURE_LEAVE_LOBBY:
      return {
        ...state,
        loading: false,
        error: message
      };
    default:
      return state
  }
}