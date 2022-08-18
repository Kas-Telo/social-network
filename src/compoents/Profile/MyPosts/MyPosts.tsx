import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    postsData: Array<PostType>
    addPost: () => void
    updateNewPostText: (message: string) => void
    newPostText: string

}
export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.postsData.map((el, index) =>
        <Post key={`${index}${el.id}`} id={el.id} postText={el.message} likesCount={el.likesCount}/>)

    return (
        <div className={style.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <AddPostForm newPostText={props.newPostText} addPost={props.addPost}
                             updateNewPostText={props.updateNewPostText}/>
            </div>
            <div className={style.postBlock}>
                {postsElements}
            </div>
        </div>
    );
};

type AddPostFormPropsType = {
    addPost: () => void
    updateNewPostText: (message: string) => void
    newPostText: string

}
const AddPostForm = (props: AddPostFormPropsType) => {
    const addPostClick = () => {
        props.addPost()
    }
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                <textarea value={props.newPostText} onChange={onChange}/>
            </div>
            <div>
                <button onClick={addPostClick}>Add Post</button>
            </div>
        </div>
    )
}