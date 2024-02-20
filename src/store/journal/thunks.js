import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice"

export const startNewNote = () => {
    return async(dispatch, getState) => {

        console.log('startNewNote')
        dispatch(savingNewNote())

        // uid
        //console.log(getState())
        const { uid } = getState().auth


        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`) )
        const resp = await setDoc(newDoc, newNote);
        console.log({
            newDoc,
            resp
        })
        newNote.id = newDoc.id
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
        //! dispatch
        // dispatch( newNote )
        // dispatch( activeNote )
    }
}