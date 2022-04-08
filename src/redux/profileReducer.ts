import {ActionType} from "./store-redux";
import {v1} from "uuid";


const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_POST = 'ADD-POST'

export type PostType = {
    id: string;
    message: string;
    likeCounts: number;
}
export type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string;
}

let initialState: ProfilePageType = {
    postsData: [
        {id: v1(), message: "Hi? how are you?", likeCounts: 15},
        {id: v1(), message: "It's my first post!", likeCounts: 25}
    ],
    newPostText: ''
}


const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    const copyState = {...state}
    switch (action.type) {
        case UPDATE_POST_TEXT:
            copyState.newPostText = action.newText
            return copyState
        case ADD_POST:
            if (state.newPostText) {
                copyState.postsData = [
                    {
                        id: v1(),
                        message: state.newPostText,
                        likeCounts: 0
                    },
                    ...state.postsData]
                copyState.newPostText = ''
            }
            return copyState
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const updatePostTextAC = (newText: string) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: newText
    } as const
}

export default profileReducer