const enum ACTIONS {

}

let initialState: SideBarType = {
    friends: [
        {id: '1', name: 'Alex'},
        {id: '1', name: 'Masha'},
        {id: '1', name: 'Dan'},
    ]
}

export const sidebarReducer = (state: SideBarType = initialState, action: SidebarActionsType): SideBarType => {
    switch (action.type) {

        default:
            return state
    }
}


//types
export type SidebarActionsType = any
export type FriendType = {
    id: string,
    name: string
}
export type SideBarType = {
    friends: Array<FriendType>
}