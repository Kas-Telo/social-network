import React from 'react';
import {addPostAC, updatePostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../../redux/store-redux";


const mapStateToProps = (state: RootStateType) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch : (action: ActionType) => void) => {
    return {
        updatePostNext: (newText: string) => {
            dispatch(updatePostTextAC(newText))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;