
import { MOVIEVIEW } from '../constants/const'

var re_state = {};
let defaultState = { data: [] };
export default (movieviewReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MOVIEVIEW.NOWPLAYING:
      return {
        ...state,
        nowplaying: action.payload
      };
    case MOVIEVIEW.TOPRATED:
      return {
        ...state,
        toprated: action.payload
      };
    case MOVIEVIEW.TOPBOXOFFICE:
      return {
        ...state,
        topboxoffice: action.payload
      };
    case MOVIEVIEW.ANTICIPATED:
      return {
        ...state,
        anticipated: action.payload
      };
    case MOVIEVIEW.MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload
      };
    case MOVIEVIEW.MOVIE_CAST:
      return {
        ...state,
        moviecast: action.payload
      };
    case MOVIEVIEW.MOVIE_REVIEW:
      return {
        ...state,
        moviereview: action.payload
      };
    default:
      return { ...state };
  }
});