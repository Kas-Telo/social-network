import {AddMessageDataType} from "../compoents/Dialogs/AddMessageForm/AddMessageForm";

const enum ACTIONS {
    SEND_MESSAGE = "SEND-MESSAGE",
}

let initialState: DialogsPageType = {
    dialogs: [
        {id: '1', name: 'Alex'},
        {id: '2', name: 'Masha'},
        {id: '3', name: 'Tanya'},
        {id: '4', name: 'Dan'},
    ],
    messages: [
        {id: '1', message: 'Hi, how are you?'},
        {id: '2', message: `Hi, I'm Alex`},
        {id: '3', message: `Hi, I'm Dan`},
    ],
    newMessageText: '',
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {
    switch (action.type) {
        case ACTIONS.SEND_MESSAGE:
            return {...state, messages: [...state.messages, {id: '0', message: action.addMessageData.messageText}]}
        default:
            return state
    }
}

export const sendMessageAC = (addMessageData: AddMessageDataType) => ({
    type: ACTIONS.SEND_MESSAGE,
    addMessageData
} as const)

//types
export type DialogsActionsType =
    | ReturnType<typeof sendMessageAC>


//types
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}