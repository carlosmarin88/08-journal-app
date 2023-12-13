import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
  return (
    <Grid container 
        direction='row' 
        justifyContent='space-between'
        sx={{mb: 1}}
        alignItems='center' >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>
                    11 de diciembre, 2023
                </Typography>
            </Grid>
            <Grid item>
                <Button color='primary' sx={{padding: 2}}>
                    <SaveOutlined sx={{fontSize: 35, mr: 1}}/>
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text' 
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un titulo'
                    label='Titulo'
                    sx={{border: 'none', mb: 1}}>

                </TextField>

                <TextField
                    type='text' 
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='¿Qyé sucedió en el día de hoy?'
                    minRows={5}>

                </TextField>
                {/* Image gallery */}
                <ImageGallery/>
            </Grid>
    </Grid>
  )
}
