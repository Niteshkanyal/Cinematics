import { combineReducers } from "redux";
import movieviewReducer from "./movieviewReducer";
import tvviewReducer from "./tvviewReducer";
import popularpeopleReducer from "./popularpeopleReducer";
import shareReducer from './shareReducer';
import discoverReducer from './discoverReducer'
import personReducer from './personReducer'
import searchReducer from './searchReducer'
export default (rootReducer = combineReducers({
  movieviewReducer,
  tvviewReducer,
  popularpeopleReducer,
  shareReducer,
  discoverReducer,
  personReducer,
  searchReducer,
}));