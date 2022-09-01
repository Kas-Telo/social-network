import React from 'react';
import {Field, reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import {maxLengthCreator, required} from "../../../ustil/validators";
import {TextArea} from "../../../commons/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props: InjectedFormProps<AddMessageDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={'text'}
                       name={'messageText'}
                       component={TextArea}
                       placeholder={'Enter message'}
                       validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

export default reduxForm<AddMessageDataType>({form: 'addMessage'})(AddMessageForm)
//types
export type AddMessageDataType = {
    messageText: string
}
