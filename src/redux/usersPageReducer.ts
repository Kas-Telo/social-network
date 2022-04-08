import {ActionType} from "./store-redux";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

export type UserForUsersPageType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    error: string
}

export type UsersPageType = {
    users: Array<UserForUsersPageType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

export const userPageReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.idUser ? {...el, followed: true} : el)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.idUser ? {...el, followed: false} : el)}
        }
        case SET_USERS: {
            return {...state, users: action.newUsers}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }
        case SET_TOTAL_USERS_COUNT: {
            console.log('action setUsersCount ', action.count)
            return {...state, totalUsersCount: action.count}
        }
    }
    return state
}

export const followAC = (idUser: number) => {
    return {
        type: FOLLOW,
        idUser,
    } as const
}
export const unfollowAC = (idUser: number) => {
    return {
        type: UNFOLLOW,
        idUser,
    } as const
}
export const setUsersAC = (newUsers: Array<UserForUsersPageType>) => {
    return {
        type: SET_USERS,
        newUsers
    } as const
}

export const setCurrentPage = (page: number) => ({type: SET_CURRENT_PAGE, page} as const)
export const setTotalUsersCount = (count: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count
    } as const
}
