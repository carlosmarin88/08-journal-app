import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { ImageGallery } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks'
import { setActiveNote, startSaveNote } from '../../store/journal'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

    const dispatch = useDispatch()
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal)

    const { body, title, date, onInputChange, formState } = useForm(note)

    const dateString = useMemo(() => {
        const newDate = new Date(date)
        return newDate.toUTCString()
    }, [date])

    useEffect(() => {
        console.log(formState)
        dispatch(setActiveNote(formState))
    }, [formState])
   
    useEffect(()=> {
        if(messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    },[messageSaved]);

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    return (
        <Grid container
            direction='row'
            justifyContent='space-between'
            sx={{ mb: 1 }}
            alignItems='center'
            className='animate__animated animate__fadeIn animate__faster' >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>
                    {dateString}
                </Typography>
            </Grid>
            <Grid item>
                <Button
                disabled={isSaving}
                onClick={onSaveNote} 
                color='primary' 
                sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 35, mr: 1 }} />
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
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={title}
                    onChange={onInputChange} />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='¿Qyé sucedió en el día de hoy?'
                    name='body'
                    value={body}
                    onChange={onInputChange}
                    minRows={5}>

                </TextField>
                {/* Image gallery */}
                <ImageGallery />
            </Grid>
        </Grid>
    )
}
