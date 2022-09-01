import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {getIsAuthValue, getLogin} from "../../redux/auth-selectors";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: getIsAuthValue(state),
        login: getLogin(state),
    }
}

export default connect(mapStateToProps, {getAuthUserData, logout} as MapDispatchPropsType)(HeaderContainer)

//types
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
}
type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType