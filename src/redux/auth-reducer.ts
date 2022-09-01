import {authApi} from "../api/authApi";
import {FormDataType} from "../compoents/Login/LoginForm/LoginForm";
import {RootThunk} from "./store-redux";
import {stopSubmit} from "redux-form";

enum ACTION {
    SET_AUTH = "SET_AUTH",
}

const initialState: AuthDomainType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state: AuthDomainType = initialState, action: AuthActionType): AuthDomainType => {
    switch (action.type) {
        case ACTION.SET_AUTH:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({
        type: ACTION.SET_AUTH,
        payload: {
            id,
            email,
            login,
            isAuth,
        }
    } as const)


export const getAuthUserData = (): RootThunk => (dispatch) => {
    return authApi.getMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserDataAC(id, email, login, true))
            } else {
                console.warn(data.messages[0])
            }
        })
}
export const login = (formData: FormDataType): RootThunk =>{
    return (dispatch) => {
        authApi.login(formData)
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else if (res.resultCode === 10) {
                    let messageError = res.messages.length > 0 ? res.messages[0] : 'Some Error'
                    dispatch(stopSubmit('login', {_error: messageError}))
                } else if (res.resultCode === 1) {
                    let messageError = res.messages.length > 0 ? res.messages[0] : 'Some Error'
                    dispatch(stopSubmit('login', {_error: messageError}))
                } else {
                    console.warn(res.data.messages[0])
                }
            })
    };
}
export const logout = (): RootThunk => (dispatch) => {
    authApi.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            } else {
                console.warn(data.messages[0])
            }
        })
}


//types
export type AuthActionType =
    | ReturnType<typeof setAuthUserDataAC>
export type AuthDomainType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
