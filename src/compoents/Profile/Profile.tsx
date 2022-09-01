import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType, StatusType} from "../../redux/profile-reducer";
import style from "./Profile.module.css";
import {ProfileStatus} from "./Status/ProfileStatus";

type ProfilePropsType = {
    profile: ProfileType | null
    updateStatus: (status: string) => void
    status: StatusType
    authProfile: boolean
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <ProfileInfo profile={props.profile}/>
            <ProfileStatus status={props.status}
                           updateStatus={props.updateStatus}
                           authProfile={props.authProfile}
            />
            <MyPostsContainer/>
        </div>
    );
};