import {
    UPLOAD_SUCCESS,
    UPDATE_FAIL,
    UPDATE_SUCCESS,
    UPLOAD_FAIL,
    USER_ACTION_LOADING
} from './types'
import userApi from '../../api/userApi'
import { tokenConfig } from './authAction'
import { toast } from 'react-toastify'
import { returnError } from './errorAction'

export const uploadImage = ({ file }) => async (dispatch, getState) => {
    dispatch({ type: USER_ACTION_LOADING })
    const config = tokenConfig(getState)
    config.headers['content-type'] = "multipart/form-data"
    try {
        const body = new FormData()
        body.append('image', file)
        const res = await userApi.upload(body, config);
        dispatch({ type: UPLOAD_SUCCESS, payload: res })
        toast.info(res.msg)
    } catch (error) {
        dispatch(returnError(error.response.data, error.response.status, "UPLOAD_FAILED"))
        dispatch({ type: UPLOAD_FAIL, payload: error })
    }
}


export const updateProfile = ({ email, name, phone, avatar, password, currentPassword }) => async (dispatch, getState) => {
    dispatch({ type: USER_ACTION_LOADING })
    const config = tokenConfig(getState)
    config.headers['content-type'] = 'application/json'
    try {
        const bodyUpdate = JSON.stringify({ email, name, phone, avatar })
        const bodyChangePass = JSON.stringify({ password, currentPassword })
        // const res = await userApi.update(bodyUpdate, config);
        const updateProfile = async () => {
            const res = await userApi.update(bodyUpdate, config);
            const res2 = await userApi.changePassword(bodyChangePass, config);
            return Promise.all([res, res2])
        }
        try {
            const res = await updateProfile()
            dispatch({ type: UPDATE_SUCCESS, payload: res })
            if (res) {
                const { avatar, email, id, name, phone } = res[0].data
                const existUser = JSON.parse(localStorage.getItem('user'))
                existUser.name = name;
                existUser.email = email;
                existUser.avatar = avatar;
                existUser.phone = phone;
                existUser.id = id;
                localStorage.setItem('user', JSON.stringify(existUser))
                toast.info(`${res[0].msg} ${res[1].msg}`)
            }
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        // dispatch(returnError(error.response.data, error.response.status, "UPDATE_FAILED"))
        console.log(error);
        dispatch({ type: UPDATE_FAIL, payload: error })

    }
}