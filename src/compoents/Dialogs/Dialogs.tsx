import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import AddMessageForm, {AddMessageDataType} from "./AddMessageForm/AddMessageForm";

type DialogsPropsType = {
    dialogsData: DialogsPageType
    sendMessage: (addMessageData: AddMessageDataType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsData.dialogs.map((el, index) =>
        <DialogsItem key={`${index}${el.id}`} id={el.id} name={el.name}/>)
    const messagesElements = props.dialogsData.messages.map((el, index) =>
        <Messages key={`${index}${el.id}`} id={el.id} message={el.message}/>)

    // const onUpdateNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.updateNewMessageText(e.currentTarget.value)
    // }

    const onSendMessage = (addMessageData: AddMessageDataType) => {
        props.sendMessage(addMessageData)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm onSubmit={onSendMessage}/>
                </div>
            </div>
        </div>
    );
};

type DialogsItemsPropsType = {
    id: string
    name: string
}
export const DialogsItem = (props: DialogsItemsPropsType) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={style.dialogsItem}>
            <NavLink className={({isActive}) => isActive ? style.activeLink : ''}
                     to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagesPropsType = {
    id: string
    message: string
}
const Messages = (props: MessagesPropsType) => {
    return <div className={style.message}>{props.message}</div>
}