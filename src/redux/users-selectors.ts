import {RootStateType} from "./store-redux";

export const getUsersState = (state: RootStateType) => {
    return state.usersPage
}
