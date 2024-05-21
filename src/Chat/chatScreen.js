import React, { useState } from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Center from '../Components/LoginComponents/Center';
import '../Game/game.css'

export default function ChatScreen({joinRoom}) {

  const [room, setRoom] = useState();
  const ss = JSON.parse(localStorage.getItem('context'));
  const user = ss.name;
  return(
    <Center >
            <Card sx={{ width: 400 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ my: 3 }}>
                        Чат
                    </Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete="off" className='form' onSubmit={e => {
                          e.preventDefault();
                          joinRoom(user, room);
                        }}>
                            <TextField
                                label="Имя"
                                name="Имя"
                                value={user}
                                
                                 />
                            <TextField
                                label="Комната"
                                name="Комната"
                                onChange={e => setRoom(e.target.value)}
                                />
                            <button className="blob-btn" disabled={!room}>
                                Войти
                                <span className="blob-btn__inner">
                                  <span className="blob-btn__blobs">
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
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
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>

  )
}
