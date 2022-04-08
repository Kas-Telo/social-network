import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageText: (newText: string) => void
    sendMessage: () => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const onNewMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateNewMessageText(newText)
    }

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onSendMessagePressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.ctrlKey &&
        props.sendMessage()
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div><textarea value={props.dialogsPage.newMessageText}
                                   placeholder={'Enter new message'}
                                   onChange={onNewMessageTextChange}
                                   onKeyPress={onSendMessagePressEnter}
                    >{''}</textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;