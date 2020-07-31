import {
    UPLOAD_SUCCESS,
    UPDATE_FAIL,
    UPDATE_SUCCESS,
    UPLOAD_FAIL,
    USER_ACTION_LOADING,
    USER_ACTION_LOADED,
    USER_ACTION_FAIL
} from './types'
import userApi from '../../api/userApi'
import { tokenConfig } from './authAction'
import { toast } from 'react-toastify'

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
        // dispatch(returnError(error.response.data, error.response.status, "UPLOAD_FAILED"))
        dispatch({ type: UPLOAD_FAIL })
        dispatch({ type: USER_ACTION_FAIL, status: "SOMETHING_WRONG" })
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
            dispatch({ type: USER_ACTION_LOADED, payload: res, status: "UPDATE_SUCCESS" })
            if (res) {
                const { avatar, email, id, name, phone } = res[0].data
                const existUser = JSON.parse(localStorage.getItem('user'))
                existUser.name = name;
                existUser.email = email;
                existUser.avatar = getState().user.data || avatar;
                existUser.phone = phone;
                existUser.id = id;
                localStorage.setItem('user', JSON.stringify(existUser))
                toast.info(res[0].msg)
                toast.info(res[1].msg)
            }
        } catch (error) {
            dispatch({ type: USER_ACTION_FAIL, status: "SOMETHING_WRONG" })
        }
    } catch (error) {
        dispatch({ type: USER_ACTION_FAIL, status: "SOMETHING_WRONG" })
    }
}