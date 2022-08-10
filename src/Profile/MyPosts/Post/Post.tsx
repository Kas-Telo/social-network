import React from 'react';
import style from './Post.module.css'

export const Post = () => {
    return (
        <div className={style.item}>
            <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar-small"/>
            <span>post</span>
            <div>like</div>
        </div>
    );
};