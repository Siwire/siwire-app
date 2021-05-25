import { USERNAME_VALUE, USER_INFO, REP_PERPAGE_INFO, CURRENT_PAGE, COUNT_PAGE, REP_ALL_INFO } from "./appTypes"

const initialState = {
    username: '',
    user: {},
    repositories: [],
    repositoriesPerPage: [],
    currentPage: 0,
    countPage: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO:
            return {
                ...state,
                user: action.payload,
            }
        case USERNAME_VALUE:
            return {
                ...state,
                username: action.payload,
            }
        case REP_ALL_INFO:
            return {
                ...state, 
                repositories: action.payload,
            }
        case REP_PERPAGE_INFO:
            return {
                ...state,
                repositoriesPerPage: action.payload,
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }
        case COUNT_PAGE:
            return {
                ...state,
                countPage: action.payload,
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducer;