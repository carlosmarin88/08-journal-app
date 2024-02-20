import { IconButton, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'

export const JournalPage = () => {
  
  const dispatch = useDispatch();

  const { isSaving,  active} = useSelector(state => state.journal)

  const isDisableNewButton = useMemo(() => isSaving , [isSaving])


  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      {/* <Typography>In sit ad esse velit Lorem sit consectetur cupidatat nisi in in. Sit aliquip cupidatat adipisicing dolor officia elit ullamco nulla anim ullamco ad proident officia. Tempor aliqua ullamco sunt commodo non laboris cillum ea incididunt pariatur ex anim sint proident.</Typography> */}
      {/* NothinSelected */}
      {
        (!!active) ? <NoteView /> :  <NothingSelectedView /> 
      }
      
      
      {/* NoteView */}
      {/* <NoteView /> */}

      <IconButton
        disabled={isDisableNewButton}
        size='large'
        onClick={onClickNewNote}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}>
          <AddOutlined sx={{fontSize: 30}} />
      </IconButton>

    </JournalLayout>
  )
}
