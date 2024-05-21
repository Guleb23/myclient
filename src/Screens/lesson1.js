import React from 'react'
import ReactPlayer from 'react-player'

export default function Lesson1() {
  return (
    <div className='player'>
      <ReactPlayer url="https://www.youtube.com/watch?v=OUXnXIU_E5I&list=PLD6SPjEPomatoOVGOzBcAYYNgSGyC0NK2" controls/>
    </div>
  )
}
