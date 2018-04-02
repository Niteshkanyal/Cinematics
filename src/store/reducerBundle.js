import { combineReducers } from "redux";

import movieviewReducer from "../reducers/movieviewReducer";
import tvviewReducer from "../reducers/tvviewReducer";
import popularpeopleReducer from "../reducers/popularpeopleReducer";
import shareReducer from '../reducers/';
import discoverReducer from '../reducers/discoverReducer'
import personReducer from '../reducers/personReducer'
import searchReducer from '../reducers/searchReducer'
export default (rootReducer = combineReducers({
  movieviewReducer,
  tvviewReducer,
  popularpeopleReducer,
  shareReducer,
  discoverReducer,
  personReducer,
  searchReducer,
}));