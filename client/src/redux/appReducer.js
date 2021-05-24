import { USERNAME_VALUE, USER_INFO, REP_INFO } from "./appTypes"

const initialState = {
    username: '',
    user: {},
    repositories: [],
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
        case REP_INFO:
            return {
                ...state,
                repositories: action.payload, 
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducer;