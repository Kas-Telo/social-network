import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: HeaderPropsType) => {
    return (
        <>
            <header className={style.header}>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-gzBtjN0Dwj0tRp9KcKew4l5dtmPsfepHw&usqp=CAU"
                        alt="logo"/>
                </div>
                <div className={style.loginBlock}>
                    {props.isAuth
                        ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
        </>
    );
};