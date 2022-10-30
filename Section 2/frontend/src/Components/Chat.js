import React from 'react'
import { useState } from 'react';
import './Chat.css';

const Chat = () => {

    const [messageList, setMessageList] = useState([
        {text : 'Hi', sent : true, sentOn : new Date()},
        {text : 'How can I help You?', sent : false, sentOn : new Date()},
        {text : 'I want some help reqarding my order', sent : true, sentOn : new Date()},
        {text : 'Yes, Sure', sent : false, sentOn : new Date()},
    ]);

    const displayChats = () => {
        return messageList.map((msg) => ( <div>
            <p className={ msg.sent ? 'sent-bubble' : 'rec-bubble' }>{msg.text}</p>
        </div> ) )
    }

  return (
    <div style={{backgroundColor : '#ccf', height: '100vh'}}>
        <div className='col-xl-8 col-md-10 mx-auto pt-5'>
            <div className="card">

                <div className="card-header">
                    <p className='m-0 h4'>Contact Name</p>
                </div>

                <div style={{ height: '70vh' }} className="card-body">
                    {displayChats()}
                </div>

                <div className="card-footer">
                    <div className='input-group'>
                        <input type="text" className='form-control' />
                        <button className='btn btn-primary btn-lg'>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Chat;