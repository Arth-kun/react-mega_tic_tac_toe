import { REQUEST_EXAMPLES, SUCCESS_EXAMPLES, FAILURE_EXAMPLES} from '../actions/index';

const INITIAL_STATE = { examplesList: { examples: [], error: null, loading: false } };

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_EXAMPLES:
      return {
        ...state, 
        examplesList: { examples: [], error: null, loading: true } 
      };
    case SUCCESS_EXAMPLES:
      return { 
        ...state, 
        examplesList: { examples: action.payload.examples, error: null, loading: false } 
      };
    case FAILURE_EXAMPLES:
      return { 
        ...state, 
        examplesList: { examples: [], error: action.payload.error, loading: false } 
      };
    default:
      return state
  }
}