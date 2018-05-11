import { 
  REQUEST_GET_PLAYER, 
  SUCCESS_GET_PLAYER, 
  FAILURE_GET_PLAYER,
  REQUEST_CREATE_PLAYER,
  SUCCESS_CREATE_PLAYER,
  FAILURE_CREATE_PLAYER, 
} from '../actions/index';

const INITIAL_STATE = { player: {}, error: null, loading: false };

export default function reducer(state = INITIAL_STATE, { type, payload: { player = {}, message } = {} }) {
  switch (type) {
    case REQUEST_GET_PLAYER:
      return {
        ...state, 
        loading: true
      };
    case SUCCESS_GET_PLAYER:
      return {
        ...state,
        player,
        loading: false
      };
    case FAILURE_GET_PLAYER:
      return { 
        ...state, 
        loading: false,
        error: message
      };
    case REQUEST_CREATE_PLAYER:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_CREATE_PLAYER:
      return {
        ...state,
        player,
        loading: false
      };
    case FAILURE_CREATE_PLAYER:
      return {
        ...state,
        loading: false,
        error: message
      };
    default:
      return state
  }
}