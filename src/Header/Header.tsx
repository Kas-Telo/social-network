import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <>
            <header className={style.header}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-gzBtjN0Dwj0tRp9KcKew4l5dtmPsfepHw&usqp=CAU" alt="logo"/>
            </header>
        </>
    );
};

export default Header;