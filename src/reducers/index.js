import { SHARE } from '../constants/const';

let defaultState = { isVisible: false };
export default (ShareReducer = (state = defaultState, action) => {
    switch ( action.type ) {
        case SHARE:
            return {
                ...state,
                isVisible: !state.isVisible
            }
        default:
            return {
                ...state
            }
    }
});