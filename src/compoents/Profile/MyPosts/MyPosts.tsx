import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import AddPostForm, {AddPostDataType} from "./AddPostForm";

type MyPostsPropsType = {
    postsData: Array<PostType>
    addPost: (addPostData: AddPostDataType) => void
    // updateNewPostText: (message: string) => void
    // newPostText: string

}
export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.postsData.map((el, index) =>
        <Post key={`${index}${el.id}`} id={el.id} postText={el.message} likesCount={el.likesCount}/>)

    return (
        <div className={style.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <AddPostForm onSubmit={props.addPost} />
            </div>
            <div className={style.postBlock}>
                {postsElements}
            </div>
        </div>
    );
};

