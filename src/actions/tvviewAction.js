import { TVVIEW, API } from '../constants/const';

export function airingToday(lang = "en-US", page = 2) {
  return dispatch => {
    fetch(
      API.ROOT + "tv/airing_today?api_key=" + API.KEY + "&language=" + lang + "&page=" + page)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: TVVIEW.AIRINGTODAY, payload: data });
      })
      .catch(function (error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}

export function ontheAir(lang = "en-US", page = 3) {
  return dispatch => {
    fetch(
      API.ROOT + "tv/on_the_air?api_key=" + API.KEY + "&language=" + lang + "&page=" + page)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: TVVIEW.ONTHEAIR, payload: data });
      })
      .catch(function (error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}

export function getPopular(lang = "en-US", page = 1) {
  return dispatch => {
    fetch(
      API.ROOT + "tv/popular?api_key=" + API.KEY + "&language=" + lang + "&page=" + page)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: TVVIEW.POPULAR, payload: data });
      })
      .catch(function (error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}

export function topRated(lang = "en-US", page = 1) {
  return dispatch => {
    fetch(
      API.ROOT + "tv/top_rated?api_key=" + API.KEY + "&language=" + lang + "&page=" + page)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: TVVIEW.TOPRATED, payload: data });
      })
      .catch(function (error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}