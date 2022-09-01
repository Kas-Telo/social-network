import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/store-redux";
import {Dispatch} from "redux";
import {addPostAC, PostType} from "../../../redux/profile-reducer";
import {AddPostDataType} from "./AddPostForm";
import {getPostsData} from "../../../redux/profile-selectors";


type MapStateToPropsType = {
    postsData: Array<PostType>
}
const mapStateToProps = (state: RootStateType): MapStateToPropsType =>{
    return {
        postsData: getPostsData(state),
    }
}

type MapDispatchToPropsType = {
    addPost: (addPostData: AddPostDataType) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost(addPostData: AddPostDataType){
            dispatch(addPostAC(addPostData))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)