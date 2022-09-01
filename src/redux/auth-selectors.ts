import {RootStateType} from "./store-redux";

export const getAuthId = (state: RootStateType) => {
    return state.auth.id
}
export const getIsAuthValue = (state: RootStateType) => {
    return state.auth.isAuth
}
export const getLogin = (state: RootStateType) => {
    return state.auth.login
}