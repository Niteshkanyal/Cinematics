import { SEARCH } from '../constants/const'

let defaultState = { data: [] };
export default (searchReducer = (state = defaultState, action) => {
  console.log("Action data fdef=", action)
  switch (action.type) {
    case SEARCH.SEARCH_RESULTS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return { ...state };
  }
});