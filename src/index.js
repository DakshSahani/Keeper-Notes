import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from './context/NotesContext';
import './index.css';


const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <App />
  </Provider>
)