import authApi from '../../api/authApi';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify'
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGIN_SUCCESS,
} from './types'
import { returnError } from './errorAction';

export const tokenConfig = (getState) => {
    const token = getState().auth.token || localStorage.getItem("token")
    const config = {
        headers: {
        }
    }
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config
}

export const loadUser = () => (dispatch, getState) => {
    const token = localStorage.getItem("token") || getState().auth.token
    if (token) {
        const decoded = jwtDecode(token)
        // localStorage.setItem('user', JSON.stringify(decoded))
        dispatch({ type: USER_LOADED, payload: decoded })
    } else dispatch({ type: AUTH_ERROR })

}

export const registerUser = ({ email = "", password = "", name = "", phone = "" }) => async (dispatch) => {
    dispatch({ type: USER_LOADING })
    const body = JSON.stringify({ email, password, name, phone })
    try {
        const res = await authApi.register(body)
        dispatch({ type: REGISTER_SUCCESS, payload: res })
        toast.info(res.msg)
    } catch (e) {
        dispatch(returnError(e.response.data, e.response.status, "REGISTER_FAILED"))
        dispatch({ type: REGISTER_FAIL })
        toast.error(e.response.data.msg)
    }
}

export const loginUser = ({ email = "", password = "" }) => async dispatch => {
    dispatch({ type: USER_LOADING })
    const body = JSON.stringify({ email, password })
    try {
        const res = await authApi.login(body)
        const decoded = jwtDecode(res.token)
        localStorage.setItem('user', JSON.stringify(decoded))
        dispatch({ type: LOGIN_SUCCESS, payload: res })
        toast.info(res.msg)
    } catch (e) {
        dispatch(returnError(e.response.data, e.response.status, "LOGIN_FAILED"))
        dispatch({ type: LOGIN_FAIL })
        toast.error(e.response.data.msg)
    }
}

export const logoutUser = () => dispatch => {
    dispatch({ type: LOGOUT_SUCCESS })
}