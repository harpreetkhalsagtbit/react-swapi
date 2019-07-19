import {
    PLANET_SEARCH_INITIATED,
    PLANET_SEARCH_SUCCESS,
    PLANET_SEARCH_FAILED
} from "../../Constants/Types";

export const performSearchAction = data => {
    var promise = new Promise(function (resolve, reject) {
        fetch(`https://swapi.co/api/planets/?search=${data.searchStr}`)
        .then(res => res.json())
        .then(json => {
            if(json.results.length) {
                json.results = json.results.sort(function(planetA, planetB) {
                    let populationA = isNaN(+(planetA.population)) ? 0 : +(planetA.population)
                    let populationB = isNaN(+(planetB.population)) ? 0 : +(planetB.population)
                    return populationB - populationA;
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