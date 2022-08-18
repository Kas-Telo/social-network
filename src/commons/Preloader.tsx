import React from 'react';
import style from './Preloader.module.css'
import preloader from '../assets/images/preloader.svg'

export const Preloader = () => {
    return (
        <div className={style.container}>
            <img src={preloader} alt="loading..."/>
        </div>
    );
};