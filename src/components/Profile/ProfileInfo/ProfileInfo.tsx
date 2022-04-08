import React from 'react';
import style from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
                     alt=""/>
            </div>
            <div className={style.profileInfo}>
                <div>ava + description</div>
            </div>
        </div>
    );
};