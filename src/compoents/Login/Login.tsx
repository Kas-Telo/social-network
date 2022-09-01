import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store-redux";
import {useNavigate} from "react-router-dom";
import {getIsAuthValue} from "../../redux/auth-selectors";


const Login = (props: LoginPropsType) => {
    const navigate = useNavigate()
    const onSubmit = (formData: FormDataType) => {
        props.login(formData)
    }
    if(props.isAuth) navigate('/profile')

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: getIsAuthValue(state),
})

export default connect(mapStateToProps, {login} as MapDispatchPropsType )(Login)

//types
type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = ({
    login: (formData: FormDataType)=> void
})
type LoginPropsType = MapStatePropsType & MapDispatchPropsType