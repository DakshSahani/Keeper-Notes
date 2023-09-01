import React , {useState , useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import './input.css';
import useNotesContext from '../Hooks/use-NotesContext';


export default function Input(){
    const {insertNote} = useNotesContext();
    
    const [inputVal,setInputVal] = useState({title:"",content:""});
    const [focus,setFocus] = useState(false);

    const el = useRef();
    const handler = (event)=>{
        if(!el.current)return ;
        if(!el.current.contains(event.target)){
            setFocus(false)
        }
    }

    useEffect(()=>{
        document.addEventListener('click',handler);
    },[]);

    const handleChange = (event,section)=>{
        let val = event.target.value;
        setInputVal(prev=>({
            ...prev,
            [section]:val
        }))
    }

    const handleClick = (event)=>{
        insertNote(inputVal)
        setInputVal({title:"",content:""});
        event.preventDefault();
    }

    const spread = ()=>{
        setFocus(true);
    }

    return(
    <div className="input-container">
    <form ref ={el}
        onFocus={spread}
        // onBlur ={shrink}
    >
        <input type="text"
            placeholder="title"
            value={inputVal.title}
            onChange={event=>handleChange(event,'title')}
        />
        {focus && <textarea type="text"
            placeholder="content..."
            value = {inputVal.content}
            onChange={event=>handleChange(event,'content')}
        />}
        {focus && <button className="add-button"
            onClick={handleClick}><FontAwesomeIcon className="add-icon" icon={faCirclePlus}/>
        </button>}
    </form>
    </div>)
}