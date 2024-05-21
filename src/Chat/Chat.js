import React from 'react'
import MessageContainer from './MessageContainer'
import './Chat.css'
import SenMessageForm from './SenMessageForm'
import ConnectedUsers from './ConnectedUser';

export default function Chat({messages, sendMessage, closeConnection, users}) {
    return (
            <div className='chat'>
                <div className='button-and-users'>
                    <ConnectedUsers users={users}/>
                        <button onClick={() => closeConnection()} className="blob-btn">
                        Выйти из чата
                        <span class="blob-btn__inner">
                            <span class="blob-btn__blobs">
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                            </span>
                        </span>
                        </button>
                    <svg xmlns="http://www.w3.org/2000/svg" className='sbg' version="1.1">
                        <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                        </filter>
                        </defs>
                    </svg>
                </div>
                <div className='message-inp-plus-container'>
                    <MessageContainer messages={messages}>
                    </MessageContainer>
                    <div className='mes-inp'>
                        <SenMessageForm sendMessage={sendMessage}></SenMessageForm>
                    </div>
                </div>
            </div>
    )
}
