import React, { useEffect } from 'react'
import useStateContext from '../../Components/LoginComponents/Hooks/useStateContext.js';
import { createAPIEndpoint, ENDPOINTS } from '../../api/index.js';
import { useState } from 'react';
import { getFormatedTime } from '../../helper/index.js';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IconContext } from "react-icons";

export default function FoodGameResult() {
    const { context, setContext } = useStateContext()
    const [score, setScore] = useState(0)
    const [qnAnswers, setQnAnswers] = useState([])
    const navigate = useNavigate()
  
    useEffect(() => {
      const ids = context.selectedOptions.map(x => x.qnId)
      
      createAPIEndpoint(ENDPOINTS.getAnswers)
        .post(ids)
        .then(res => {
          const qna = context.selectedOptions
            .map(x => ({
              ...x,
              ...(res.data.find(y => y.qnId == x.qnId))
            }))
            console.log(qna);
          setQnAnswers(qna)
          calculateScore(qna)
  
        })
        .catch(err => console.log(err))
    }, [])
  
    const calculateScore = qna => {
      let tempScore = qna.reduce((acc, curr) => {
        return curr.answer == curr.selected ? acc + 1 : acc;
      }, 0)
      setScore(tempScore)
    }

    const restart = () => {
      setContext({
        timeTaken: 0,
        selectedOptions: []
      })
      navigate("/FoodGame")
    }
  return (
    <div className='card-container'>
      <div className='card-2'>
      <button className='super-btn' onClick={ () =>{
            navigate("/MainMenu")
          }} >
            <div className='icon-btn'>
            <IconContext.Provider value={{ size: "30px", className: "btn-icon" }}>
              <IoIosArrowRoundBack/>
            </IconContext.Provider>
          </div>
            <div className='text-btn'> В меню </div>
          </button>
          <hr className='hr'/>
          <div className='card-quetion ceter'>
            Поздравляю!!!
          </div>
          <div className='body'>
            <div className='option-text'>
              Ваш результат: {score}/5
            </div>
            <div className='option-text'>
              Вы потратили: {getFormatedTime(context.timeTaken) + ' времени'}
            </div>
            <div className='option-text'>
              Продолжайте обучение. У вас очень хорошо выходит!!!
            </div>
          </div>
          <div className='btn-con'>
            <button onClick={restart} className="blob-btn">
              Изучать дальше!
              <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                </span>
              </span>
            </button>
          </div>
          </div>
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
  )
}
