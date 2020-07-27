import {
    UPLOAD_SUCCESS,
    UPDATE_FAIL,
    UPDATE_SUCCESS,
    UPLOAD_FAIL,
    USER_ACTION_LOADING
} from '../actions/types'

const initialState = {
    isLoading: false,
    msg: "",
    data: null

}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTION_LOADING:
            return {
                ...state,
                isLoading: true
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
        case UPDATE_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        case UPDATE_FAIL:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        default:
            return state
    }
}