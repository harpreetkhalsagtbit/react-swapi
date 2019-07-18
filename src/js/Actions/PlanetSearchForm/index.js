import {
    PLANET_SEARCH_INITIATED,
    PLANET_SEARCH_SUCCESS,
    PLANET_SEARCH_FAILED
} from "../../Constants/Types";

import { history } from "../../Helpers/history";

export const performSearchAction = data => {
    console.log("Search Action perform", data);
    var promise = new Promise(function (resolve, reject) {
        fetch(`https://swapi.co/api/planets/?search=${data.searchStr}`)
        .then(res => res.json())
        .then(json => {
            if(json.results.length) {
                json.results = json.results.sort(function(planetA, planetB) {
                    return planetA.population > planetB.population? true: false;
                })
                resolve(json.results);
            } else {
                resolve([]);
                // reject("not found");
            }
        });
    });

    return (dispatch, getState) => {
        dispatch({
            type: PLANET_SEARCH_INITIATED
        });
        return promise.then(
            response => {
                dispatch({
                    type: PLANET_SEARCH_SUCCESS,
                    planets: response
                });
            },
            reject => {
                dispatch({
                    type: PLANET_SEARCH_FAILED
                });
            }
        );
    };
};