import {
    UPLOAD_SUCCESS,
    UPDATE_FAIL,
    UPDATE_SUCCESS,
    UPLOAD_FAIL,
    USER_ACTION_LOADING
} from './types'
import userApi from '../../api/userApi'
import { tokenConfig } from './authAction'

export const uploadImage = ({ file }) => async (dispatch, getState) => {
    dispatch({ type: USER_ACTION_LOADING })
    const config = tokenConfig(getState)
    config.headers['content-type'] = "multipart/form-data"
    try {
        const body = new FormData()
        body.append('image', file)
        const res = await userApi.upload(body, config);
        dispatch({ type: UPLOAD_SUCCESS, payload: res })
    } catch (error) {
        console.log(error.response)
        dispatch({ type: UPDATE_FAIL, payload: error })
    }
}

export const updateProfile = (user) => async (dispatch, getState) => {
    dispatch({ type: USER_ACTION_LOADING })
    const config = tokenConfig(getState)
    config.headers['content-type'] = 'application/json'
    try {
        const body = JSON.stringify(user)
        const res = await userApi.update(body, config);
        dispatch({ type: UPDATE_SUCCESS, payload: res })
    } catch (error) {
        console.log(error.response);
        dispatch({ type: UPDATE_FAIL, payload: error })
    }
}