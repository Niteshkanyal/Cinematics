import { SHARE } from '../constants/const';

let defaultState = { isVisible: false };
export default (shareReducer = (state = defaultState, action) => {
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