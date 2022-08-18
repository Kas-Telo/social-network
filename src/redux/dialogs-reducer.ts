const enum ACTIONS {
    SEND_MESSAGE = "SEND-MESSAGE",
    UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT",
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case ACTIONS.UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.message}
        case ACTIONS.SEND_MESSAGE: {
            if (state.newMessageText === '') return state
            return {
                ...state,
                messages: [...state.messages, {id: '0', message: state.newMessageText}],
                newMessageText: ''
            }
        }
        default:
            return state
    }
}

export const sendMessageAC = () => ({type: ACTIONS.SEND_MESSAGE} as const)
export const updateNewMessageTextAC = (message: string) => ({type: ACTIONS.UPDATE_NEW_MESSAGE_TEXT, message} as const)

//types
type ActionsType =
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>


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