import Header from './header.jsx';
import Input from './input.jsx'
import NotesContainer from './NotesContainer.jsx';
import Footer from './footer.jsx';
import { useEffect } from 'react';
import useNotesContext from '../Hooks/use-NotesContext.js';

function App() {    
  
  const {getNotes} = useNotesContext();

  useEffect(()=>{
    getNotes();
  },[getNotes]);

  return (
    <>
      <Header />

      <main>
        <Input/>
        <NotesContainer />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
