import {RootThunk} from "./store-redux";
import {getAuthUserData} from "./auth-reducer";

enum ACTION {
    INITIALIZE_APP = "INITIALIZE_APP"
}

const initialState: AppStateType = {
    initialized: false
}
export const appReducer = (state: AppStateType = initialState, action: AppActionType): AppStateType => {
    switch (action.type) {
        case ACTION.INITIALIZE_APP:
            return {...state, initialized: true}
        default:
            return state
    }
}

export const initializeAppAC = () => ({type: ACTION.INITIALIZE_APP,} as const)


export const initializeApp = (): RootThunk => (dispatch) => {
    const getMe = dispatch(getAuthUserData())
    Promise.all([getMe])
        .then(() => dispatch(initializeAppAC()))
}


//types
export type AppActionType =
    | ReturnType<typeof initializeAppAC>
export type AppStateType = {
    initialized: boolean
}
