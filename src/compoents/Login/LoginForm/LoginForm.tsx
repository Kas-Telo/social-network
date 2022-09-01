import React from 'react';
import {Field, reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import {Input} from "../../../commons/FormsControls/FormsControls";
import {required} from "../../../ustil/validators";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field type={'text'} name={'email'} placeholder={'e-mail'} component={Input} validate={[required]}/></div>
                <div><Field type={'text'} name={'password'} placeholder={'Password'} component={Input} validate={[required]}/></div>
                <div><Field type={'checkbox'} name={'rememberMe'} component={Input}/> Remember me</div>
                <div>
                    {props.error}
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)