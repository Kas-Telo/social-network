import React from 'react';
import style from './Post.module.css'
import avatarIconImage from '../../../../assets/images/avatar-icon-images-4.jpg'

type PostPropsType = {
    id: string
    postText: string | undefined;
    likesCount: number;
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={style.item}>
            <img src={avatarIconImage} alt="avatar-small"/>
            <span>{props.postText}</span>
            <div>likes {props.likesCount}</div>
        </div>
    );
};