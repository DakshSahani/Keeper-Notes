import {useContext} from 'react'
import notesContext from '../context/NotesContext'

const useNotesContext = ()=> useContext(notesContext);
export default useNotesContext;