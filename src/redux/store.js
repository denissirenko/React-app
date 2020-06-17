import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "its first post", likesCount: 15},
                {id: 2, message: "its second post", likesCount: 10},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vova'},
                {id: 2, name: 'Slava'},
                {id: 3, name: 'Oleg'},
                {id: 4, name: 'Dima'},
                {id: 5, name: 'Sveta'},
                {id: 6, name: 'Victor'},
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo!'},
                {id: 4, message: 'Hi!'},
                {id: 5, message: 'How are you?'},
                {id: 6, message: 'Yo!'},
            ],
            newMessageBody: '',
        },
        sidebar: {

        },
    },

    _callSubscriber () {
        console.log('State change');
    },

    getState() {
        return this._state;
    },
    
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state);
    },
}

export default store;

window.store = store;