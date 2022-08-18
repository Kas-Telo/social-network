import React from 'react';
import style from './User.module.css'
import {UserType} from "../../../redux/users-reducer";
import avatarIconImage from '../../../assets/images/avatar-icon-images-4.jpg'
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UserType
    // followUser: (userId: number) => void
    // unFollowUser: (userId: number) => void
    onFollowClick: (userId: number, followed: boolean) => void
}

export const User = (props: UserPropsType) => {
    const onFollowClick = () => {
        // props.user.followed ? props.unFollowUser(props.user.id) : props.followUser(props.user.id)
        props.onFollowClick(props.user.id, props.user.followed)
    }
    return (
        <>
            <div className={style.avatarBlock}>
                <div>
                    <NavLink to={`/profile/${props.user.id}`}>
                        <img
                            src={props.user.photos.small ? props.user.photos.small : avatarIconImage}
                            alt="avatar"/>
                    </NavLink>
                </div>
                <div>
                    <button onClick={onFollowClick}>{!props.user.followed ? 'FOLLOW' : 'UNFOLLOW'}</button>
                </div>
            </div>

            <div className={style.descriptionBlock}>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
                <div>props.user.location.country.title</div>
                <div>props.user.location.country.cityTitle</div>
            </div>
        </>
    );
};