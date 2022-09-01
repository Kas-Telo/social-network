import {Dispatch} from "redux";
import {usersApi} from "../api/usersApi";

export enum ACTIONS {
    SET_USERS = "SET_USERS",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    CHANGE_FOLLOWING_IN_PROGRESS = "CHANGE_FOLLOWING_IN_PROGRESS"
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1  ,
    isFetching: false,
    followingInProgress: [],
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionType): UsersPageType => {
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
        case ACTIONS.CHANGE_FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(el => el !== action.userId)
            }
        default:
            return state
    }
}

export const setUsersAC = (users: Array<UserType>) => ({type: ACTIONS.SET_USERS, users} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: ACTIONS.SET_TOTAL_USERS_COUNT, totalCount} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: ACTIONS.SET_CURRENT_PAGE, currentPage} as const)
export const followUserAC = (userId: number) => ({type: ACTIONS.FOLLOW, userId} as const)
export const unFollowUserAC = (userId: number) => ({type: ACTIONS.UNFOLLOW, userId} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: ACTIONS.TOGGLE_IS_FETCHING, isFetching} as const)
export const changeFollowingInProgressAC = (userId: number, isFetching: boolean) =>
    ({type: ACTIONS.CHANGE_FOLLOWING_IN_PROGRESS, userId, isFetching} as const)

export const followUser = (userId: number) => (dispatch: Dispatch) => {
    dispatch(changeFollowingInProgressAC(userId, true))
    usersApi.followUser(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(followUserAC(userId))
            } else {
                console.error(res.data.messages[0])
            }
        })
        .finally(() => dispatch(changeFollowingInProgressAC(userId, false)))
}
export const unFollowUser = (userId: number) => (dispatch: Dispatch) => {
    dispatch(changeFollowingInProgressAC(userId, true))
    usersApi.unFollowUser(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unFollowUserAC(userId))
            } else {
                console.error(res.data.message[0])
            }
        })
        .finally(() => dispatch(changeFollowingInProgressAC(userId, false)))
}
export const getUsers = (currentPage: number, pageSize:number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    usersApi.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
            dispatch(setCurrentPageAC(currentPage))
        })
        .finally(() => dispatch(toggleIsFetchingAC(false)))
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
    followingInProgress: Array<number>
}
export type UsersActionType =
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof followUserAC>
    | ReturnType<typeof unFollowUserAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof changeFollowingInProgressAC>
