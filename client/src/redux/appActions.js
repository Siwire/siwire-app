import axios from 'axios';

import { USERNAME_VALUE, USER_INFO, REP_PERPAGE_INFO, CURRENT_PAGE, COUNT_PAGE, REP_ALL_INFO } from "./appTypes"

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
            const allRep = await axios.get(`${url}${username}/repos`,);
            const repForFirstPage = await axios.get(`${url}${username}/repos?page=1&per_page=4`,);
            console.log(allRep);
            dispatch({ type: REP_ALL_INFO, payload: allRep.data })
            dispatch({ type: USER_INFO, payload: userInfo.data })
            dispatch({ type: REP_PERPAGE_INFO, payload: repForFirstPage.data })
            const countPage = allRep.data.length / 4
            dispatch({ type: COUNT_PAGE, payload: countPage })
        }
        catch (error) {
            dispatch({ type: USER_INFO, payload: { user: "notfound" } })
        }
    }
}

export const loadRepositoriesFromServer = (page, username) => {
    return async dispatch => {
        const repositoriesPerPage = await axios.get(`${url}${username}/repos?page=${page + 1}&per_page=4`,);
        dispatch({ type: CURRENT_PAGE, payload: page })
        dispatch({ type: REP_PERPAGE_INFO, payload: repositoriesPerPage.data })
    }
}