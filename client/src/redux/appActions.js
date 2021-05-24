import axios from 'axios';

import { USERNAME_VALUE, USER_INFO, REP_INFO } from "./appTypes"

const url = 'https://api.github.com/users/';

export const setUsername = (username) => {
    return dispatch => {
        dispatch({ type: USERNAME_VALUE, payload: username })
    }
}
export const fetchGetUser = (username) => {
    return async dispatch => {
        try {
            const userInfo = await axios.get(`${url}${username}`);
            const repInfo = await axios.get(`${url}${username}/repos`);
            dispatch({ type: USER_INFO, payload: userInfo.data })
            dispatch({ type: REP_INFO, payload: repInfo.data })
        }
        catch (error) {
            dispatch({ type: USER_INFO, payload: { user: "notfound" } })
        }
    }
}