import './Signup.module.css';
import {Container,Typography,Button,FormControl,OutlinedInput,InputLabel, InputAdornment, IconButton} from '@mui/material';
import { useState } from 'react';
import {Visibility, VisibilityOff} from '@mui/icons-material'
import { useSignup } from '../../hooks/useSignup';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const navigate=useNavigate();

    const {signup,hata,bekliyor}=useSignup();


    const [values, setValues]=useState({
        email:"",
        password:"",
        showPassword:false,
        userName:""
    })
    
    const handleChange=(prop)=>(event)=>{
        setValues({...values,[prop]:event.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(values);
        navigate('/')

        signup(values.email, values.password, values.userName);
    }

    const handleClickShowPassword=()=>{
        setValues({
            ...values,
            showPassword:!values.showPassword
        })
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
            <Typography sx={{mt:15,ml:5,fontWeight:'bold'}} variant="h4" color="darkslateblue">Üye Ol</Typography>
			
            <FormControl fullWidth sx={{ mt: 5 }}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput
                    value={values.email} onChange={handleChange('email')}
                    id="email"
                    label="Email"
                />
            </FormControl>

            <FormControl fullWidth sx={{ mt: 5 }}>
                <InputLabel htmlFor="password">Parola</InputLabel>
                <OutlinedInput type={values.showPassword ? 'text' : 'password'}
                    value={values.password} onChange={handleChange('password')}
                         endAdornment={
                         <InputAdornment position='end'>
                        <IconButton aria-label = "Toggle Password" onClick={handleClickShowPassword} edge="end">
                            {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>}
                    id="password"
                    label="Parola"
                />
            </FormControl>



            <FormControl fullWidth sx={{ my: 5 }}>
                <InputLabel htmlFor="user-name">Kullanıcı Ad</InputLabel>
                <OutlinedInput
                    value={values.userName} onChange={handleChange('userName')}
                    id="eser-name"
                    label="Kullanıcı Ad"
                />
            </FormControl>



            {!bekliyor && <Button variant="contained" type="submit" color="info" size="large" sx={{mt:5}}>Üye Ol</Button>}

            {bekliyor && <Button disabled variant="contained" type="submit" color="info" size="large" sx={{mt:5}}>Bekliyor</Button>}

            {hata && <p>{hata}</p>}
        </form>
      </Container>
    )
}