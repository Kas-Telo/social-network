import {RootStateType} from "./store-redux";

export const getDialogsState = (state: RootStateType) => {
    return state.dialogsPage
}
