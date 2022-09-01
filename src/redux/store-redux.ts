import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {SidebarActionsType, sidebarReducer} from "./sidebar-reducer";
import {UsersActionType, usersReducer} from "./users-reducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {composeWithDevTools} from 'redux-devtools-extension';
import {AppActionType, appReducer} from "./app-reducer";

const composeEnhancers = composeWithDevTools({})

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk),))

//types
export type RootStateType = ReturnType<typeof rootReducer>
export type RootStoreType = typeof store
export type RootActionsType =
    | AuthActionType
    | DialogsActionsType
    | ProfileActionsType
    | SidebarActionsType
    | UsersActionType
    | AppActionType
export type RootThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AnyAction>


// @ts-ignore
window.store = store