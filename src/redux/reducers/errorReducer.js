import { GET_ERROR, CLEAR_ERROR } from '../actions/types'

const initialState = {
    error: {},
    status: null,
    statusCode: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ERROR:
            return {
                error: action.payload.error,
                status: action.payload.status,
                statusCode: action.payload.statusCode
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: {},
                status: null,
                statusCode: "",
            }
        default:
            return state;
    }
}
