
import {POPULARPEOPLE} from '../constants/const'

var re_state = {};
let defaultState = { data: [] };
export default (popularpeopleReducer = (state = defaultState, action) => {
  console.log("REDUCER",action);
  switch (action.type) {
    case POPULARPEOPLE.LIST:
      return {
        ...state,
        popularpeople: action.payload
      };

    default:
      return { ...state };
  }
});