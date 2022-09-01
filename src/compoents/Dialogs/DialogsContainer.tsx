import {Dialogs} from "./Dialogs";
import {DialogsPageType, sendMessageAC} from "../../redux/dialogs-reducer";
import {RootStateType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {AddMessageDataType} from "./AddMessageForm/AddMessageForm";
import {getDialogsState} from "../../redux/dialogs-selectors";


type MapStateToPropsType = {
    dialogsData: DialogsPageType
}
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsData: getDialogsState(state)
    }
}

type MapDispatchToPropsType = {
    sendMessage: (addMessageData: AddMessageDataType) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage (addMessageData: AddMessageDataType) {
            dispatch(sendMessageAC(addMessageData))
        },
    }
}
const withRedirect = WithAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirect)