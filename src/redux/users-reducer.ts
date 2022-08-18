import axios from "axios";
import {Dispatch} from "redux";

export enum ACTIONS {
    SET_USERS = "SET_USERS",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 0,
    isFetching: true,
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case ACTIONS.SET_USERS:
            return {...state, users: action.users}
        case ACTIONS.SET_TOTAL_USERS_COUNT:
            return {...state, totalCount: action.totalCount}
        case ACTIONS.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case ACTIONS.FOLLOW:
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case ACTIONS.UNFOLLOW:
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case ACTIONS.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const setUsers = (users: Array<UserType>) => ({type: ACTIONS.SET_USERS, users} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: ACTIONS.SET_TOTAL_USERS_COUNT, totalCount} as const)
export const setCurrentPage = (currentPage: number) => ({type: ACTIONS.SET_CURRENT_PAGE, currentPage} as const)
export const followUserAC = (userId: number) => ({type: ACTIONS.FOLLOW, userId} as const)
export const unFollowUserAC = (userId: number) => ({type: ACTIONS.UNFOLLOW, userId} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: ACTIONS.TOGGLE_IS_FETCHING, isFetching} as const)

export const followUser = (userId: number) => (dispatch: Dispatch) => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
        {
            withCredentials: true,
            headers: {
                'API-KEY': '81900730-749c-4a2a-ba22-e77b5f16bf0e'
            }
        })
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(followUserAC(userId))
            }else{
                console.error(res.data.messages[0])
            }
        })
}
export const unFollowUser = (userId: number) => (dispatch: Dispatch) => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {
            withCredentials: true,
            headers: {
                'API-KEY': '81900730-749c-4a2a-ba22-e77b5f16bf0e'
            }
        })
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unFollowUserAC(userId))
            }else{
                console.error(res.data.message[0])
            }
        })
}


//types

export type UserType = {
    id: number
    name: string
    photos: {
        big: string
        small: string
    }
    followed: boolean
    status: string
    location: {
        country: {
            title: string
            cityTitle: string
        }
    }
}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
export type ActionType =
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof followUserAC>
    | ReturnType<typeof unFollowUserAC>
    | ReturnType<typeof toggleIsFetching>
