import {MOVIEVIEW,API} from '../constants/const';


  export function nowPlaying(lang = "en-US", page = 1) {
    return dispatch => {
      fetch(
        API.ROOT + "movie/now_playing?api_key=" +API.KEY + "&language=" + lang + "&page=" +page)
        .then(response => response.json())
        .then(responseJson => {
          data = responseJson.results;
          dispatch({ type: MOVIEVIEW.NOWPLAYING, payload: data });
        })
        .catch(function(error) {
          dispatch({ type: ERROR, payload: error });
        });
    };
  }
  
  export function topBoxOffice(lang = "en-US", page = 1) {
    return dispatch => {
      fetch( API.ROOT + "movie/top_rated?api_key=" +API.KEY +"&language=" +lang +"&page=" +page)
        .then(response => response.json())
        .then(responseJson => {
          data = responseJson.results;
          dispatch({ type:MOVIEVIEW.TOPBOXOFFICE, payload: data });
        })
        .catch(function(error) {
          dispatch({ type: ERROR, payload: error });
        });
    };
  }
  
  export function getAnticipated(lang = "en-US", page = 2) {
    return dispatch => {
       fetch( API.ROOT +"movie/popular?api_key=" +API.KEY +"&language=" +lang +"&page=" +page)
        .then(response => response.json())
        .then(responseJson => {
          data = responseJson.results;
          dispatch({ type: MOVIEVIEW.ANTICIPATED, payload: data });
        })
        .catch(function(error) {
          dispatch({ type: ERROR, payload: error });
        });
    };
  }
  
  export function topRated(lang = "en-US", page = 1) {
    return dispatch => {
      fetch(
        API.ROOT + "movie/upcoming?api_key=" +API.KEY + "&language=" + lang +"&page=" + page
      )
        .then(response => response.json())
        .then(responseJson => {
          data = responseJson.results;
          dispatch({ type: MOVIEVIEW.TOPRATED, payload: data });
        })
        .catch(function(error) {
          dispatch({ type: ERROR, payload: error });
        });
    };
  }
  

