import axios from 'axios';
import { createContext, useState , useCallback} from 'react';

const notesContext = createContext();

function Provider({children}){
    let [Notes,setData] = useState([]);

    const getNotes = useCallback(async ()=>{
        const response = await axios.get("http://localhost:5000/notes");
        console.log(response);
        setData(response.data);
    },[]);


    const insertNote = async(note)=>{
        const response = await axios.post('http://localhost:5000/notes/',note);
        setData(prev=>[...prev,response.data]);   
    }

    const deleteNoteById = async(id)=>{
        setData(prev=>
        prev.filter((data)=>data.id!==id)
        )
        await axios.delete('http://localhost:5000/notes/'+id);
    }

    const editNote = async (note)=>{
        const res = await axios.put('http://localhost:5000/notes/'+note.id,{
        title:note.title,
        content:note.content
        })
        const editedNotes = Notes.map((data)=>{
            if(data.id === res.data.id){
            return res.data;
            }
            return data;
        })
        setData(editedNotes);
    }

    const valueToShare = {
        Notes,
        getNotes,
        insertNote,
        editNote,
        deleteNoteById
    };

    return (
        <notesContext.Provider value = {valueToShare}>
            {children}
        </notesContext.Provider>
    );
}

export default notesContext;
export {Provider};