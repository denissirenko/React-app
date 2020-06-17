import React from 'react';
import s from './dialogs.module.scss';
import DialogItem from './dialogItem/DialogItem';
import Message from './Message/Message';



function Dialogs(props) {

    let state= props.dialogsPage;
    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map( message => <Message message={message.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div>
                    <textarea
                        placeholder = 'Enter your message'
                        onChange={onNewMessageChange} 
                        value={newMessageBody}
                        />
                    <button onClick={ onSendMessageClick }>Add post</button>
                </div>
            </div>
        </div>
    );
}
  
export default Dialogs;