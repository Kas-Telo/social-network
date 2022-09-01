import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form/lib/Field";
import React, {InputHTMLAttributes, TextareaHTMLAttributes} from "react";

type FormsControlsPropsType = {
    meta: WrappedFieldMetaProps
    children: React.ReactNode
}

const FormControl = ({meta: {touched, error}, children}: FormsControlsPropsType) => {
    const hasError = error && touched
    return <div>
        <div>
            {children}
        </div>
        {hasError && <span>{error}</span>}
    </div>
}


export const TextArea = (props: WrappedFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    const {input, meta, ...restProps} = props
    return <FormControl meta={meta}><textarea {...input} {...restProps}></textarea></FormControl>
}
export const Input = (props: WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>) => {
    const {input, meta, ...restProps} = props
    return <FormControl meta={meta}><input {...input} {...restProps}></input></FormControl>
}