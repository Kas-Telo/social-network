import dialogsReducer, {sendMessageAC, updateMessageTextAC} from "./dialogsReducer";
import profileReducer, {addPostAC, updatePostTextAC} from "./profileReducer";
import {v1} from "uuid";


export type PostType = {
    id: string;
    message: string;
    likeCounts: number;
}
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
export type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string;
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscribers: () => void
    subscribe: (observer: () => void) => void;
    dispatch: (action: ActionType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), message: "Hi? how are you?", likeCounts: 15},
                {id: v1(), message: "It's my first post!", likeCounts: 25}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },

    getState() {
        return this._state
    },
    _callSubscribers() {
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscribers()
    },

    subscribe(observer: () => void) {
        this._callSubscribers = observer;
    }
}

export type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updatePostTextAC>
    | ReturnType<typeof sendMessageAC> | ReturnType<typeof updateMessageTextAC>




