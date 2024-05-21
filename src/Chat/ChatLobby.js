import React, { useState } from 'react'
import ChatScreen from './chatScreen';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import Chat from './Chat';
import './Chat.css'

export default function ChatLobby() {
    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
  
    const joinRoom = async (user, room) => {
      try {
        const connection = new HubConnectionBuilder()
          .withUrl("https://localhost:7262/chat")
          .configureLogging(LogLevel.Information)
          .build();
  
        connection.on("ReceiveMessage", (user, message) => {

          
          setMessages(messages => [...messages, {user, message}]);
          console.log(messages);
          
        });

        connection.on("UsersInRoom", (users) => {
          setUsers(users);
        });

        

        connection.onclose(e => {
          setConnection();
          setMessages([]);
          setUsers([]);
        });
  
  
  
        await connection.start();
        await connection.invoke("JoinRoom", { user, room });
        setConnection(connection);
      } catch (e) {
        console.log(e);
      }
    }

    const sendMessage = async (message) => {
        try {
          await connection.invoke("SendMessage", message);
        } catch (e) {
          console.log(e);
        }
      }

      const closeConnection = async () => {
        try {
          await connection.stop();
        } catch (e) {
          console.log(e);
        }
      }
    
    
  

  return (
    <div className='div'>
      {!connection
    ? <ChatScreen joinRoom={joinRoom} />
    : <Chat messages={messages} sendMessage={sendMessage} closeConnection={closeConnection} users={users} />}  
    </div>
  )
}

