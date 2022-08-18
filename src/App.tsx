import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Navbar} from "./compoents/Navbar/Navbar";
import ProfileContainer from "./compoents/Profile/ProfileContainer";
import {Friends} from "./compoents/Friends/Friends";
import {DialogsContainer} from "./compoents/Dialogs/DialogsContainer";
import Users from './compoents/Users/UsersContainer'
import HeaderContainer from "./compoents/Header/HeaderContainer";

function App() {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar />
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/'} element={<ProfileContainer/>}/>
                    <Route path={'/profile/*'} element={<ProfileContainer/>}/>
                    <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/music'} element={'Music'}/>
                    <Route path={'/news'} element={'News'}/>
                    <Route path={'/settings'} element={'Settings'}/>
                    <Route path={'friends'} element={<Friends/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;


