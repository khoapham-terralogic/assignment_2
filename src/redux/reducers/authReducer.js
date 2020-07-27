import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGIN_SUCCESS
} from '../actions/types'

const initialState = {
    isAuth: null,
    isLoading: false,
    token: localStorage.getItem('token'),
    user: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                user: action.payload
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuth: false,
                isLoading: false
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                isLoading: false,
            }
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return {
                isLoading: false,
                isAuth: false,
                token: null,
                user: null
            }
        default:
            return state
    }
}