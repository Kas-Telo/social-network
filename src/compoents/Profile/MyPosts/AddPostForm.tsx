// type AddPostFormPropsType = {
//     addPost: () => void
//     updateNewPostText: (message: string) => void
//     newPostText: string
// }
import {Field, reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import React from "react";
import {TextArea} from "../../../commons/FormsControls/FormsControls";
import {required} from "../../../ustil/validators";

const AddPostForm = (props: InjectedFormProps<AddPostDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={'text'}
                       name={'postText'}
                       component={TextArea}
                       placeholder={'Enter text'}
                       validate={[required]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}
export default reduxForm<AddPostDataType>({form: 'addPost'})(AddPostForm)
//types
export type AddPostDataType = {
    postText: string
}