const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 7, message: body});
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})   


export const updateNewMessageBodyCreator = (body) => ({   
    type: UPDATE_NEW_MESSAGE_BODY, 
    body: body
})

export default dialogsReducer;