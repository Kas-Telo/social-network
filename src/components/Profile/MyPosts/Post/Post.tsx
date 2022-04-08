import React from 'react';
import style from './Post.module.css'
import {PostType} from "../../../../redux/profileReducer";

const Post = (props: PostType) => {
    return (
        <div className={style.item}>
            <img src="https://cdn.mos.cms.futurecdn.net/C6HfMG7vULcucbYFau89md.jpg" alt="Аватар"/>
            {props.message}
            <div>
                <span>Like</span> {props.likeCounts}
            </div>
        </div>
    );
};

export default Post;