import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/218/771/753/images-of-natures-beauty-1920x1200-wallpaper-preview.jpg" alt="main img"/>
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts/>

        </div>
    );
};

export default Profile;