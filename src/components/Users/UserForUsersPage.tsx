import React from 'react';
import s from "./UserForUsersPage.module.css";
import {UserForUsersPageType} from "../../redux/usersPageReducer";
import emptyAvatar from '../../assets/images/empty-avatar.jpg'


type UserForUsersPagePropsType = {
    user: UserForUsersPageType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const UserForUsersPage = (props: UserForUsersPagePropsType) => {
    const onFollowClick = () => {
        props.follow(props.user.id);
    }

    const onUnfollowClick = () => {
        props.unfollow(props.user.id)

    }
    return (
        <div className={s.container}>
            <div className={s.avatarBox}>
                <div><img src={props.user.photos.small !== null ? props.user.photos.small : emptyAvatar} alt="avatar"/></div>
                <div >
                    {props.user.followed ? <button onClick={onUnfollowClick}>UNFOLLOW</button> : <button onClick={onFollowClick}>FOLLOW</button>}
                </div>
            </div>

            <div className={s.descriptionBox}>
                <div className={s.nameAndStatusbox}>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </div>
                <div className={s.residence}>{`${'Belarus'}, ${'Minsk'}`}</div>
            </div>
        </div>
    );
};
