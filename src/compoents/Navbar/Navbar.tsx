import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {SideBarFriendsContainer} from "./SideBarFriends/SideBarFriendsContainer";
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/store-redux";



export const Navbar = () => {
    let authId = useSelector<RootStateType, number | null>(state => state.auth.id)
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink  className={({isActive}) => isActive ? style.activeLink : ''} to={`/profile/${authId && authId}`}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={({isActive}) => isActive ? style.activeLink : ''} to={'/dialogs'}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={({isActive}) => isActive ? style.activeLink : ''} to={'/users'}>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={({isActive}) => isActive ? style.activeLink : ''} to={'/music'}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={({isActive}) => isActive ? style.activeLink : ''} to={'/news'}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={({isActive}) => isActive ? style.activeLink : ''} to={'/settings'} >Settings</NavLink>
            </div>
            <div className={`${style.item} ${style.sideBarFriendsItem}`}>
                <NavLink className={({isActive}) => isActive ? style.activeLink : ''} to={'/friends'} >Friends</NavLink>
                <SideBarFriendsContainer />
            </div>
        </nav>
    );
};