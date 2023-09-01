import useNotesContext from '../Hooks/use-NotesContext';
import React from 'react';
import Note from './Note'

const NotesContainer =  ()=>{
    const {Notes}= useNotesContext();
    console.log(Notes);

    return (
    <div className="note-container">
        {Notes.map(noteObj => (
            <Note 
                id = {"Note-"+noteObj.id}
                Note = {noteObj}
                key = {noteObj.id}
            />
        ))
        }
    </div>);
}

export default NotesContainer;