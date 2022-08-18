import React from 'react';
import style from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../../commons/Preloader";
import avatarImg from '../../../assets/images/avatar-icon-images-4.jpg'

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) return <Preloader/>
    return (
        <div>
            <div className={style.mainImage}>
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/218/771/753/images-of-natures-beauty-1920x1200-wallpaper-preview.jpg"
                    alt="main img"/>
            </div>
            <div className={style.descriptionBlock}>
                <div className={style.avatar    }>
                    <img style={props.profile.photos.large ? undefined : {width: '200px'}} src={props.profile.photos.large ? props.profile.photos.large : avatarImg} alt={`${props.profile.fullName} photo`}/>
                </div>
                <span style={{fontWeight: 'bold'}}>{props.profile.fullName}</span>
            </div>
        </div>
    );
};