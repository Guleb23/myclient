import React, { useContext, useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home/home.js'
import Game from '../Game/game.js';
import ChatScreen from '../Chat/chatScreen.js';
import Videos from '../Screens/videos.js';
import SideBar from '../Screens/TopDown/sidebar.js';
import Login from '../Components/LoginComponents/Login.js'
import useStateContext from '../Components/LoginComponents/Hooks/useStateContext.js';
import Result from '../Game/Result.js';
import { ENDPOINTS, createAPIEndpoint } from '../api/index.js';
import ChatLobby from '../Chat/ChatLobby.js';
import GameMainMenu from '../Game/MainMenu/GameMainMenu.js';
import SportGame from '../Game/SportGame/sportGame.js';
import SportGameResult from '../Game/SportGame/sportGameResult.js';
import FoodGame from '../Game/FoodGame/FoodGame.js';
import FoodGameResult from '../Game/FoodGame/FoodGameResult.js';
import Lesson1 from './lesson1.js';

export default function Welcome() {
   const {context, setContext}= useStateContext();
  return context.participantId == 0 ?(<Login/>):
  (
    <Router>
      <div className="App">
        <SideBar />
        <div className='content'>
          <Routes>
          <Route path='/home' element={<Home/>}/>
            <Route path='/FoodGameResult' element={<FoodGameResult/>}/>
            <Route path='/FoodGame' element={<FoodGame/>}/>
            <Route path='/MainMenu' element={<GameMainMenu/>}/>
            <Route path='/SportResult' element={<SportGameResult/>}/>
            <Route path='/result' element={<Result/>}/>
            <Route path='/game' element={<Game/>}/>
            <Route path='/sport' element={<SportGame/>}/>
            <Route path='/chat' element={<ChatLobby/>}/>
            <Route path='/videos/*' element={<Videos/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}
