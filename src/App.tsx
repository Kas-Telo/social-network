import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Navbar} from "./compoents/Navbar/Navbar";
import ProfileContainer from "./compoents/Profile/ProfileContainer";
import {Friends} from "./compoents/Friends/Friends";
import {DialogsContainer} from "./compoents/Dialogs/DialogsContainer";
import Users from './compoents/Users/UsersContainer'
import HeaderContainer from "./compoents/Header/HeaderContainer";
import Login from "./compoents/Login/Login";
import {connect} from "react-redux";
import {RootStateType} from "./redux/store-redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./commons/Preloader/Preloader";

function App(props: AppPropsType) {
    useEffect(() => {
        props.initializeApp()
    }, [])

    if(!props.initialized) return <Preloader/>

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
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
                    <Route path={'/friends'} element={<Friends/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}

const mapStateToProps = (state: RootStateType) => ({initialized: state.app.initialized})
export default connect(mapStateToProps, {initializeApp} as MapDispatchPropsType)(App);

//types
type AppPropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: () => void
}


