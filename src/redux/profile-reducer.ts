import {Dispatch} from "redux";
import {profileApi} from "../api/profileApi";
import {AddPostDataType} from "../compoents/Profile/MyPosts/AddPostForm";

const enum ACTIONS {
    ADD_POST = "ADD-POST",
    SET_PROFILE = "SET_PROFILE",
    SET_STATUS = "SET_STATUS",
}

let initialState: ProfilePageType = {
    postsData: [
        {id: '1', message: `Hi, it's my first post`, likesCount: 15},
        {id: '2', message: `Hi, How are you?`, likesCount: 10},
    ],
    profile: null,
    status: {
        text: '',
        maxLengthText: 300
    }
}
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case ACTIONS.ADD_POST: {
            return {
                ...state,
                postsData: [{id: '1', message: action.addPostData.postText, likesCount: 0}, ...state.postsData],
            }
        }
        case ACTIONS.SET_PROFILE:
            return {...state, profile: action.profile}
        case ACTIONS.SET_STATUS:
            return {...state, status: {...state.status, text: action.status}}
        default:
            return state
    }
}

export const addPostAC = (addPostData: AddPostDataType) => ({type: ACTIONS.ADD_POST, addPostData} as const)
export const setProfileAC = (profile: ProfileType) => ({type: ACTIONS.SET_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: ACTIONS.SET_STATUS, status} as const)

export const getProfile = (userId: number) => (dispatch: Dispatch) => {
    profileApi.getProfile(userId)
        .then(data => {
            dispatch(setProfileAC(data))
        })
}
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then(status => {
            dispatch(setStatusAC(status))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatusAC(status))
            } else {
                console.error(data.messages[0])
            }
        })
}

//types
export type ProfileActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setProfileAC>
    | ReturnType<typeof setStatusAC>

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type StatusType = {
    text: string
    maxLengthText: number
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}
export type ProfilePageType = {
    postsData: Array<PostType>
    profile: ProfileType | null
    status: StatusType
}
