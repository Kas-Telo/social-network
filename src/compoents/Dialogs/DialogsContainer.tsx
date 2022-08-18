import {Dialogs} from "./Dialogs";
import {DialogsPageType, sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {RootStateType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type MapStateToPropsType = {
    dialogsData: DialogsPageType
}
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage
    }
}

type MapDispatchToPropsType = {
    updateNewMessageText: (message: string) => void
    sendMessage: () => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageText(message: string) {
            dispatch(updateNewMessageTextAC(message))
        },
        sendMessage () {
            dispatch(sendMessageAC())
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)