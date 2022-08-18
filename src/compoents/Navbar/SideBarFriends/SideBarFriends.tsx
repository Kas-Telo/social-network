import React from 'react';
import style from './SideBarFriends.module.css'
import {FriendType} from "../../../redux/sidebar-reducer";
import avatarIconImage from '../../../assets/images/avatar-icon-images-4.jpg'

type SideBarPropsType = {
    friendsData: Array<FriendType>
}

export const SideBarFriends = (props: SideBarPropsType) => {
    const sideBarFriendsView = props.friendsData.map((el, index) => {
        return(
            <div key={index} className={style.item}>
                <img src={avatarIconImage} alt="small avatar foto"/>
                <div>{el.name}</div>
            </div>
        )})

    return (
        <div className={style.sideBarFriendsItems}>
            {sideBarFriendsView}
        </div>
    );
};