import authApi from '../../api/authApi';
import jwtDecode from 'jwt-decode';
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

export const tokenConig = (getState) => {
    const config = {
    }
}

export const loadUser = () => (dispatch, getState) => {
    const token = localStorage.getItem("token")
    if (token) {
        const decoded = jwtDecode(token)
        dispatch({ type: USER_LOADED, payload: decoded })
    } else dispatch({ type: AUTH_ERROR })

}

export const registerUser = ({ email = "", password = "", name = "", phone = "" }) => async (dispatch) => {
    dispatch({ type: USER_LOADING })
    const body = JSON.stringify({ email, password, name, phone })
    try {
        const res = await authApi.register(body)
        dispatch({ type: REGISTER_SUCCESS, payload: res })
    } catch (e) {
        dispatch(returnError(e.response.data, e.response.status, "REGISTER_FAILED"))
        dispatch({ type: REGISTER_FAIL })
    }
}

export const loginUser = ({ email = "", password = "" }) => async dispatch => {
    dispatch({ type: USER_LOADING })
    const body = JSON.stringify({ email, password })
    try {
        const res = await authApi.login(body)
        dispatch({ type: LOGIN_SUCCESS, payload: res })
    } catch (e) {
        console.log(e.response);
        dispatch(returnError(e.response.data, e.response.status, "LOGIN_FAILED"))
        dispatch({ type: LOGIN_FAIL })
    }
}