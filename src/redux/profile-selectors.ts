import {RootStateType} from "./store-redux";

export const getProfileState = (state: RootStateType) => {
    return state.profilePage
}
export const getPostsData = (state: RootStateType) => {
    return state.profilePage.postsData
}