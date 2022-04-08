import React from 'react';
import {sendMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../redux/store-redux";


const mapStateToProps =(state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void ) => {
    return {
        updateNewMessageText: (newText: string) => {
            dispatch(updateMessageTextAC(newText))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;