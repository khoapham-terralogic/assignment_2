import { GET_ERROR, CLEAR_ERROR } from './types';

export const clearError = () => dispatch => {
    dispatch({ type: CLEAR_ERROR })
}

export const returnError = (error, status, statusCode) => {
    return {
        type: GET_ERROR,
        payload: {
            error, status, statusCode
        }
    }
}