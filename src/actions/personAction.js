import {PERSON} from '../constants/const';
export function personFetch(P_id){
    return dispatch=>{
        fetch('https://api.themoviedb.org/3/person/' +P_id+ '?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type:PERSON.PERSON_DETAILS,payload:responseJson
                })
            })
            .catch((error) =>{
              console.error(error);
            });
    }
}

export function personmovieFetch(P_id){
    return dispatch=>{
        fetch('https://api.themoviedb.org/3/person/' +P_id+ '/movie_credits?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type:PERSON.PERSON_MOVIES,payload:responseJson.cast
                })
            })
            .catch((error) =>{
              console.error(error);
            });
    }
}

export function persontvFetch(P_id){
    return dispatch=>{
        fetch('https://api.themoviedb.org/3/person/' +P_id+ '/tv_credits?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type:PERSON.PERSON_TV,payload:responseJson.cast
                })
            })
            .catch((error) =>{
              console.error(error);
            });
    }
}
