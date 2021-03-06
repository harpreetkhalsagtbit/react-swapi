import {
    USER_LOG_IN_INITITATED,
    USER_LOG_IN_SUCCESS,
    USER_LOG_IN_FAILED
} from "../../Constants/Types";

import { history } from "../../Helpers/history";

export const performLoginAction = data => {
    console.log("Login Action perform", data);
    var promise = new Promise(function (resolve, reject) {
        fetch(`https://swapi.co/api/people/?search=${data.username}`)
        .then(res => res.json())
        .then(json => {
            let res = json.results.filter((people) => {
                if (people.name === data.username && people.birth_year === data.password) {
                    return true
                } else {
                    return false;
                }
            });
            if(res.length) {
                resolve(true);
            } else {
                reject("invalid credentials");
            }
        });
    });

    return (dispatch, getState) => {
        dispatch({
            type: USER_LOG_IN_INITITATED
        });
        return promise.then(
            response => {
                dispatch({
                    type: USER_LOG_IN_SUCCESS
                });
                localStorage.setItem("token", "token-for-user@" + data.username);
                localStorage.setItem("sessionSearchCount", 0);
                localStorage.setItem("prevSearchTimestamp", "");
                // history.push("/home");
                // hack for production build
                window.location.reload()
            },
            reject => {
                dispatch({
                    type: USER_LOG_IN_FAILED
                });
            }
        );
    };
};