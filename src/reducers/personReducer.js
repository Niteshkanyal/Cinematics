import { PERSON } from '../constants/const'

let defaultState = { data: [] };
export default (personReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PERSON.PERSON_DETAILS:
      return {
        ...state,
        personinfo: action.payload
      };
    case PERSON.PERSON_MOVIES:
      return {
        ...state,
        personmovie: action.payload
      };
    case PERSON.PERSON_TV:
      return {
        ...state,
        persontv: action.payload
      };
    default:
      return { ...state };
  }
});