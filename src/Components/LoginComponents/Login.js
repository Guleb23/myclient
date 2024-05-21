import React, { useState } from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Center from './Center';
import useForm from './Hooks/useForm';
import { ENDPOINTS, createAPIEndpoint } from '../../api';
import useStateContext from './Hooks/useStateContext';

const getFreshModel= ()=>({
    name:'',
    email:''
});

export default function Login() {
    const { context, setContext} = useStateContext();
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);
    const login = e =>{
        e.preventDefault();
        if(validate())
            createAPIEndpoint(ENDPOINTS.participant).
            post(values).
            then(res => {
                setContext({participantId:res.data.participantId, name:res.data.name});
                console.log(context);
            }).catch(err => console.log(err))
    }
    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Некорректная почта"
        temp.name = values.name != "" ? "" : "Данное поле обязательно"
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
    }
  return (
<Center>
            <Card sx={{ width: 400 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ my: 3 }}>
                        English App
                    </Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete="off" onSubmit={login}>
                            <TextField
                                label="Почта"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                {...(errors.email && { error: true, helperText: errors.email })}
                                 />
                            <TextField
                                label="Имя"
                                name="name"
                                value={values.name}
                                onChange={handleInputChange}
                                {...(errors.name && { error: true, helperText: errors.name })}
                                />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ width: '90%' }}>Изучать</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>

  )
}
