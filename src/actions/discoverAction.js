import {DISCOVER} from '../constants/const';
export function getDiscover(dot = 'popularity.desc'){
    return dispatch=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US&sort_by=`+dot)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type:DISCOVER.GET_DISCOVER,payload:responseJson.results
                })
            })
            .catch((error) =>{
              console.error(error);
            });
    }
}

export function getallgenres(sy, ey, gen) {
    return (dispatch) => {
        fetch(URL + 'discover/movie?api_key=' + APIKEY + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=' + sy + '&release_date.lte=' + ey + '&with_genres=' + gen)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: FILTER.ALLGENRES, payload: responseJson })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

