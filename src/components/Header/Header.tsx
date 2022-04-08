import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img
                src="https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg"
                alt="Логотип"/>
        </header>
    );
};

export default Header;