import React, { useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import './Chat.css'

export default function SenMessageForm({sendMessage}) {
    const [message, setMessage] = useState('');
    return (
        <div className='form-container'>
            <Form onSubmit={e => {
                e.preventDefault();
                sendMessage(message);
                setMessage("");
            }}>
                <div className='inp-con'>
                    <input placeholder='...сообщение' className='in' onChange={e => setMessage(e.target.value)} value={message}/>
                    <button className='btn' type='submit' disabled={!message} > Отправить </button>
                </div>
            </Form>

        </div>
    )
}