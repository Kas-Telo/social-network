import React, {ComponentType} from 'react';
import {RootStateType} from "../redux/store-redux";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const ContainerComponent = (props: ContainerComponentPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>

        return <Component {...restProps as T}/>
    };
    const wrappedComp = connect(mapStateToProps)(ContainerComponent)
    return wrappedComp;
}

//types
type MapStatePropsType = {
    isAuth: boolean
}
type ContainerComponentPropsType = MapStatePropsType