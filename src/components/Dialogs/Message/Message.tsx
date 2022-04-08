import React from 'react';
import style from "../Dialogs.module.css";
import {MessageType} from "../../../redux/dialogsReducer";

export const Message = (props: MessageType) => {
    return (
        <div>
            <div className={style.message}>{props.message}</div>
        </div>
    );
};
