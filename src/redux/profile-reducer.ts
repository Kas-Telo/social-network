const enum ACTIONS {
    ADD_POST = "ADD-POST",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
    SET_PROFILE = "SET_PROFILE" ,
}

let initialState: ProfilePageType = {
    postsData: [
        {id: '1', message: `Hi, it's my first post`, likesCount: 15},
        {id: '2', message: `Hi, How are you?`, likesCount: 10},
    ],
    newPostText: '',
    profile: null,
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ACTIONS.ADD_POST: {
            if (state.newPostText === '') return state
            return {
                ...state,
                postsData: [{id: '1', message: state.newPostText, likesCount: 0}, ...state.postsData],
                newPostText: ''
            }
        }
        case ACTIONS.UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.message}
        case ACTIONS.SET_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostAC = () => ({type: ACTIONS.ADD_POST} as const)
export const updateNewPostTextAC = (message: string) => ({type: ACTIONS.UPDATE_NEW_POST_TEXT, message} as const)
export const setProfile = (profile: ProfileType) => ({type: ACTIONS.SET_PROFILE, profile} as const)

//types
type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setProfile>

export type PostType = {
    id: string
    message: string
    likesCount: number
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
    newPostText: string
    profile: ProfileType | null
}
