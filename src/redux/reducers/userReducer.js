import {
    USER_ACTION_LOADED,
    USER_ACTION_LOADING,
    UPLOAD_SUCCESS,
    UPLOAD_FAIL,
    USER_ACTION_FAIL
} from '../actions/types'

const initialState = {
    isLoading: false,
    status: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTION_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case USER_ACTION_LOADED:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                status: action.payload.status
            }
        case USER_ACTION_FAIL:
            return {
                ...state,
                isLoading: false,
                status: action.payload.status
            }
        case UPLOAD_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        case UPLOAD_FAIL:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        // case UPDATE_SUCCESS:
        //     return {
        //         ...state,
        //         ...action.payload,
        //         isLoading: false
        //     }
        // case UPDATE_FAIL:
        //     return {
        //         ...state,
        //         ...action.payload,
        //         isLoading: false
        //     }
        default:
            return state
    }
}