import React from 'react';
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div ><a className={style.item} href="#">Profile</a></div>
            <div ><a className={`${style.item} ${style.active}`} href="#">Messages</a></div>
            <div ><a className={style.item} href="#">Music</a></div>
            <div ><a className={style.item} href="#">News</a></div>
            <div ><a className={style.item} href="#">Settings</a></div>
        </nav>
    );
};

export default Navbar;