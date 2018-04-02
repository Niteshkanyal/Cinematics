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
