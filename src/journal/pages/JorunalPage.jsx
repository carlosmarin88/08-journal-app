import { Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views'

export const JorunalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>In sit ad esse velit Lorem sit consectetur cupidatat nisi in in. Sit aliquip cupidatat adipisicing dolor officia elit ullamco nulla anim ullamco ad proident officia. Tempor aliqua ullamco sunt commodo non laboris cillum ea incididunt pariatur ex anim sint proident.</Typography> */}
      {/* NothinSelected */}
      <NothingSelectedView />
      {/* NoteView */}
    </JournalLayout>
  )
}
