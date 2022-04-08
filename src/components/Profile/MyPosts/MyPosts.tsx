import React from 'react';
import Post from "./Post/Post";
import style from './MyPosts.module.css'
import {ProfilePageType} from "../../../redux/profileReducer";


type MyPostsPropsType = {
    profilePage: ProfilePageType
    updatePostNext: (newText: string) => void
    addPost: () => void
}

const MyPosts = (props: MyPostsPropsType) => {
    let postElements = props.profilePage.postsData.map(p => <Post key={p.id}
                                                                  id={p.id}
                                                                  message={p.message}
                                                                  likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }
    const onChangeText = () => {
        let postMessage = newPostElement.current?.value;
        postMessage && props.updatePostNext(postMessage)
    }

    return (
        <div>
            <div className={style.postsBlock}>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} onChange={onChangeText} value={props.profilePage.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add Post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;