import React from 'react';
import s from './dialogs.module.scss';
import DialogItem from './dialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator}  from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



function DialogsContainer(props) {

    let state= props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs 
            updateNewMessageBody = {onNewMessageChange} 
            sendMessage= {onSendMessageClick}
            dialogsPage = {state} />
    );
}
  
export default DialogsContainer;