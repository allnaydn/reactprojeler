import React from 'react'
import { useState } from 'react'
import {Button,TextField,Typography} from '@mui/material'

export default function Form() {

    const [baslik,setBaslik]=useState('')
    const [miktar,setMiktar]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(miktar,baslik);
    }

  return (
   <form noValidate autoComplete='off' onSubmit={handleSubmit}>
    <Typography variant='h6' color='darkslateblue'>Harcama Bilgisini Giriniz</Typography>
     <TextField label="Harcama Başlık" variant='standart' fullWitdh required onChange={(e)=>setBaslik(e.target.value)} value={baslik}/>
     <TextField label="Harcama Miktar" variant='standart' fullWitdh required onChange={(e)=>setMiktar(e.target.value)} value={miktar} sx={{my:5}}/>
     <Button variant='contained' color="secondary" type='submit'>EKLE</Button>
   </form>
  )
}
