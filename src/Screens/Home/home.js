import React from 'react'
import './home.css'

export default function Home() {
  return (
    <div className='wrapper'>
      <div className='grid-container'>
        <div className='grid-item'>
          <div className='grid-image'></div>
          <div className='text-body'>
            <div className='minititle'>
              Воспользуйся чатом!
            </div>
            <div className='deftext'>
              В нашем чате ты можешь общаться с ностиелями языка, преподавателями или своими друзьями
            </div>
          </div>
        </div>
        <div className='grid-item'>
          <div className='grid-image two'></div>
          <div className='text-body twotext'>
          <div className='minititle'>
              Воспользуйся нашей игрой!
            </div>
            <div className='deftext'>
              Она поможет выучить английские слова играючи!
            </div>
          </div>
        </div>
        <div className='grid-item'>
        <div className='grid-image three'></div>
          <div className='text-body threetext'>
          <div className='minititle'>
              Посмотри наши видеоуроки!
            </div>
            <div className='deftext'>
              У нас куча полезных видеоуроков, которые помогут вам
            </div>
          </div>
        </div>
        <div className='grid-item'>
          <div className='wr'>

          <div className='grid-containers'>
            <div className='item'>
              <div className='ger-item'></div>
            </div>
            <div className='item t'>
              <div className='ger-item tt'></div>
            </div>
            
          </div>
          </div>
        </div>
      </div>

    </div>
  )
}
