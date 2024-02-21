import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({note}) => {

    const dispatch = useDispatch();


    const newTitle = useMemo(() => {
        return note.title.length > 10 ? note.title.substring(0,10) + '...' : note.title
    }, [note.title])

    const activeNote = () => {
        dispatch(setActiveNote(note))
    }

    return (
        <ListItem disablePadding onClick={activeNote}>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={note.body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
