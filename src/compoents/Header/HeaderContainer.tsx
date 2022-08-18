import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {AuthResponseType, setAuth} from "../../redux/auth-reducer";
import axios from "axios";
import {ProfileType, setProfile} from "../../redux/profile-reducer";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(res => {
                if (res.data.resultCode === 0)
                    this.props.setAuth(res.data.data)
                else {
                    console.warn('error')
                }
                return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${res.data.data.id}`)
                    .then(res => {
                        this.props.setProfile(res.data)
                    })
            })
            .then()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuth, setProfile} as MapDispatchPropsType)(HeaderContainer)

//types
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    setAuth: (authData: AuthResponseType) => void
    setProfile: (profile: ProfileType) => void
}
type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType