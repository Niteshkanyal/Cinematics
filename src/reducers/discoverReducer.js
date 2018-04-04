
import { DISCOVER } from '../constants/const'

let defaultState = { data: [] };
export default (discoverReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DISCOVER.GET_DISCOVER:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return { ...state };
  }
});