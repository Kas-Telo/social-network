enum ACTION {
    SET_AUTH = "SET_AUTH"
}
const initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
    switch (action.type){
        case ACTION.SET_AUTH:
            return {...state, ...action.authData, isAuth: true}
        default: return state
    }
}

export const setAuth = (authData: AuthResponseType) => ({type: ACTION.SET_AUTH, authData} as const)

//types
type ActionType =
    | ReturnType<typeof setAuth>
export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthResponseType = {
    id: number
    email: string
    login: string
}
