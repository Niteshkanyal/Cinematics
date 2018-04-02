
import _ from 'lodash';
import { SEARCH } from '../constants/const'
export function search(query) {
    return dispatch => {
        fetch('https://api.themoviedb.org/3/search/multi?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US&page=1&include_adult=false&query=' + query)
            .then(response => response.json())
            .then(responseJson => {
                data = responseJson.results;
                
                var change = {
                    movies:this.filterData(data, 'movie'),
                    tv: filterData(data, 'tv'),
                    person: filterData(data, 'person')
                }
                
                dispatch({ type: SEARCH.SEARCH_RESULTS, payload: change });
            })
            .catch(function (error) {
                dispatch({ type: ERROR, payload: error });
            });
    };
}

filterData = (dataArry, filter) => {
    let obj=[];
     _.filter(dataArry,(item)=>{
       if(item.media_type==filter)
        obj.push(item);
     })
     return obj;
}