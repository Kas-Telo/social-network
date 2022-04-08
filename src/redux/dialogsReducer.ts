import {ActionType} from "./store-redux";
import {v1} from "uuid";

const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type DialogType = {
    id: string;
    name: string;
}
export type MessageType = {
    id: string;
    message: string;
}
export type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageText: string
}

let initialState: DialogsPageType = {
    dialogsData: [
        {id: v1(), name: 'Den'},
        {id: v1(), name: 'Masha'},
        {id: v1(), name: 'Tanya'},
        {id: v1(), name: 'Olya'},
    ],
    messagesData: [
        {id: v1(), message: 'Hi!'},
        {id: v1(), message: 'How are you'},
        {id: v1(), message: 'Tanya'},
    ],
    newMessageText: ''
}

const dialogReducer = (state: DialogsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            return {...state, newMessageText: action.newText}
        case SEND_MESSAGE:
            if (state.newMessageText) {
                return {
                    ...state,
                    messagesData: [
                        ...state.messagesData,
                        {
                            id: v1(),
                            message: state.newMessageText
                        }
                    ],
                    newMessageText: ''
                }
            }
            return state
        default:
            return state
    }
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}
export const updateMessageTextAC = (newText: string) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: newText
    } as const
}

export default dialogReducer