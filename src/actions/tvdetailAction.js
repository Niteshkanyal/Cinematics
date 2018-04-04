import { SHARE, TVVIEW } from '../constants/const';

export function tvFetch(tv_id) {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: TVVIEW.TV_DETAILS, payload: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
export function toggeleShareButton() {
    return dispatch => {
        dispatch({ type: SHARE });
    }
}

export function gettvCast(tv_id) {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: TVVIEW.TV_CAST, payload: responseJson.cast
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export function gettvSeason(tv_id) {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: TVVIEW.TV_SEASONS, payload: responseJson.seasons
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}