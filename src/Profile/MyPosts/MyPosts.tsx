import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div >
                <div>
                    <textarea></textarea>
                </div>
                <button>Add Post</button>
            </div>
            <div>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};