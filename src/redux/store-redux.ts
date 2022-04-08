import {combineReducers, createStore} from "redux";
import dialogsReducer, {sendMessageAC, updateMessageTextAC} from "./dialogsReducer";
import profileReducer, {addPostAC, updatePostTextAC} from "./profileReducer";
import {
    followAC,
    setCurrentPage,
    setTotalUsersCount,
    setUsersAC,
    unfollowAC,
    userPageReducer
} from "./usersPageReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userPageReducer
})

export type RootStateType = ReturnType<typeof reducers>

export let store = createStore(reducers)

export type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updatePostTextAC>
    | ReturnType<typeof sendMessageAC> | ReturnType<typeof updateMessageTextAC>
    | ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>
|ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount>
