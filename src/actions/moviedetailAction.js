import { SHARE, MOVIEVIEW } from '../constants/const';

export function movieFetch(movie_id) {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: MOVIEVIEW.MOVIE_DETAILS, payload: responseJson
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

export function getmovieCast(movie_id) {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: MOVIEVIEW.MOVIE_CAST, payload: responseJson.cast
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export function getmovieReview(movie_id) {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: MOVIEVIEW.MOVIE_REVIEW, payload: responseJson.results
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}