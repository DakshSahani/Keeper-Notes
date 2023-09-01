import React, { useState ,useContext } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash , faPen ,faFloppyDisk , faXmark} from '@fortawesome/free-solid-svg-icons';
import NotesContext from '../context/NotesContext'

function Mynote({Note}){
    const {deleteNoteById,editNote} = useContext(NotesContext);

    const [isDeleted,deleteNote] = useState(false);
    const [isEditing,setEditing] = useState(false);
    const [value , setValue] = useState({title:Note.title,content:Note.content});
    
    const handleDelete = (event)=>{
        deleteNote(true);
        setTimeout(()=>{
            deleteNoteById(Note.id);
        },100)
    }

    const handleEditSave  = (event)=>{
        editNote({
            id:Note.id,
            ...value
        })
        setEditing(false);
    }

    const handleChange = (event,type)=>{
        if(!isEditing)return ;

        const val = event.target.value;
        setValue(prev=>({
            ...prev,
            [type]:val
        }))
    }

    const handleEditCancel = (event)=>{
        setEditing(false);
        setValue({title:Note.title,content:Note.content});
    }
 
    return (
    <div className={isDeleted?"note deleting-note":"note"}>
        <input
            onChange = {(event)=>handleChange(event,"title")} 
            value = {value.title} />
        <div className="wraper">
            <p className = "sizer">{value.content}</p>
            <textarea 
                onChange = {(event)=>handleChange(event,"content")} 
                value={value.content} />
        </div>

        <button className="delete-button"
            onClick={handleDelete}><FontAwesomeIcon icon={faTrash}/>
        </button>
        {!isEditing && <button className="edit-button"
            onClick={()=>{setEditing(true)}}>
            <FontAwesomeIcon icon={faPen}/>
        </button>}
        {isEditing && <>
            <button 
                className="save-button"
                onClick = {handleEditSave}
            ><FontAwesomeIcon icon={faFloppyDisk} /></button>
            <button 
                className='cancel-button'
                onClick = {handleEditCancel}
            ><FontAwesomeIcon icon={faXmark} /></button>
        </>
        }
    </div>)
}

export default Mynote;