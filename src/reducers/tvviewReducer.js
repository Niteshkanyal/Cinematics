
import {TVVIEW} from '../constants/const'

var re_state = {};
let defaultState = { data: [] };
export default (tvviewReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TVVIEW.AIRINGTODAY:
      return {
        ...state,
        airingtoday: action.payload
      };
	case TVVIEW.ONTHEAIR:
      return {
        ...state,
        ontheair: action.payload
      };
    case TVVIEW.POPULAR:
      return {
        ...state,
        popular: action.payload
      };
    case TVVIEW.TOPRATED:
      return {
        ...state,
        toprated: action.payload
      };
      case TVVIEW.TV_CAST:
      return {
        ...state,
        tvcast: action.payload
      };
      case TVVIEW.TV_DETAILS:
      return {
        ...state,
        tvdetail: action.payload
      };
      case TVVIEW.TV_SEASONS:
      return {
        ...state,
        tvseason: action.payload
      };
    default:
      return { ...state };
  }
});