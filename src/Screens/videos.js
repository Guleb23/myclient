import React from 'react'
import './video.css'
import Navbar from './navbar'
import { Route, Routes, Router } from 'react-router-dom'
import FoodGameResult from '../Game/FoodGame/FoodGameResult'
import Home from './Home/home'
import Lesson1 from './lesson1'

export default function Videos() {

  return (

      <div className="video-container">
        <div className='video-card'>
          <Navbar />
          <div className='ss'>
            <div className='textb'>
              <div className='titleb'> Урок №1</div>
              <div className='tlext'>
              Курс состоит из четырех блоков: грамматика, полезные фразы, разговорные ситуации и диалоги.
              </div>
            </div>
            <Lesson1 >
              <Routes>
                <Route path='lesson1' element={<Lesson1/>}/>
              </Routes>
            </Lesson1>
          </div>

        </div>
      </div>

  )
}





