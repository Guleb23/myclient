import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, List, ListItemButton } from '@mui/material';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';


import { createAPIEndpoint, BASE_URL, ENDPOINTS } from '../../api';
import '../game.css'

import { getFormatedTime } from '../../helper';
import useStateContext from '../../Components/LoginComponents/Hooks/useStateContext';


export default function FoodGame() {
    const [qns, setQns] = useState([])
  const [qnIndex, setQnIndex] = useState(0)
  const [timeTaken, setTimeTaken] = useState(0)
  const { context, setContext } = useStateContext()
  const navigate = useNavigate()
  let timer;
  const startTimer = () => {
    timer = setInterval(() => {
        setTimeTaken(prev => prev + 1)
    }, [1000])
}

useEffect(() => {
  setContext({
      timeTaken: 0,
      selectedOptions: []
  })
  createAPIEndpoint(ENDPOINTS.getFood)
      .fetch() 
      .then(res => {
          setQns(res.data)
          
          startTimer()
      })
      .catch(err => { console.log(err); })

  return () => { clearInterval(timer) }
}, [])
const updateAnswer = (qnId, optionIdx) => {
  const temp = [...context.selectedOptions]
  temp.push({
      qnId,
      selected: optionIdx
  })
  if (qnIndex < 4) {
      setContext({ selectedOptions: [...temp] })
      setQnIndex(qnIndex + 1)
  }
  else {
      setContext({ selectedOptions: [...temp], timeTaken })
      navigate("/FoodGameResult");
  }
}
  return (
    qns.length !== 0 
    ?
    <div className='card-container'>
      <div className='card'>
        <div className='card-image'>
          {qns[qnIndex].ImageName !== null ?
          <div className='img-con'>
            <img src={BASE_URL + 'Image/' + qns[qnIndex].imageName }/>

          </div>
          :
          <img src='https://i.pinimg.com/564x/3a/8b/42/3a8b424848fbd4b2fd3b721df9829fde.jpg'/>}
          
        </div>
        
        <div className='card-body'>
        <div className='card-timer'><span>{getFormatedTime(timeTaken)}</span></div>
        <Box sx={{ width: '100%' }}>
          <LinearProgress
            variant="determinate"
            value={(qnIndex + 1) * 100 / 5}
            sx={{
              backgroundColor: `#87c38f`,
              "& .css-5xe99f-MuiLinearProgress-bar1": {
                backgroundColor: `#226f54`
              },
              height : "20px",
              "& .MuiLinearProgress-bar": {
                height: `20px`
              },
              borderRadius : "10px",
             
            }} />
            
        </Box>
        <div className="qw-time-con">
          <div className='card-quetion'>{qns[qnIndex].qnInWords}</div>
          
        </div>
        <List>
          {qns[qnIndex].options.map((item, index) => 
            <ListItemButton disableRipple key={index}
            onClick={() => updateAnswer(qns[qnIndex].qnId, index)}>
              <div className='option-text'>
                {index + 1}<span>)</span> {item}
              </div>
            </ListItemButton>
          )}
         
        </List>
      </div>
      </div>
    </div>
    :
    null
  )
}
