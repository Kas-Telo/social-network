import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/store-redux";
import {Dispatch} from "redux";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/profile-reducer";


type MapStateToPropsType = {
    postsData: Array<PostType>
    newPostText: string
}
const mapStateToProps = (state: RootStateType): MapStateToPropsType =>{
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (message: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost(){
            dispatch(addPostAC())
        },
        updateNewPostText(message: string){
            dispatch(updateNewPostTextAC(message))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)