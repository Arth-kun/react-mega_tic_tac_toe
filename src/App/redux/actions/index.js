import { CALL_API } from 'redux-api-middleware';

// Actions
export const REQUEST_EXAMPLES = '/examples/REQUEST';
export const SUCCESS_EXAMPLES = '/examples/SUCCESS';
export const FAILURE_EXAMPLES = '/examples/FAILURE';


// Actions creators
export function fetchExamples() {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3000/publications/examples`,
      method: 'GET',
      types: [REQUEST_EXAMPLES, SUCCESS_EXAMPLES, FAILURE_EXAMPLES]
    }
  }
}

