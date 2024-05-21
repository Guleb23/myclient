import React from 'react'
import './Chat.css'

export default function MessageContainer({messages, sendMessage}) {
  let className;
  return (
<div className='message-container' >
  <div className='mes-con'>
      {messages.map((m, index) =>
          <div key={index} className='user-message'>
              <div className='message bg-primary'>{m.message}</div>
              <div className='from-user'>{m.user}</div>
          </div>
      )}
  </div>
</div>
  )
}
