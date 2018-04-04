import { POPULARPEOPLE, API } from '../constants/const';

export function getPopular(lang = "en-US", page = 1) {
  return dispatch => {
    fetch(
      API.ROOT + "person/popular?api_key=" + API.KEY + "&language=" + lang + "&page=" + page)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        console.log("ACTION DATA", data);
        dispatch({ type: POPULARPEOPLE.LIST, payload: data });
      })
      .catch(function (error) {
        dispatch({ ERROR, payload: error });
      });
  };
}
