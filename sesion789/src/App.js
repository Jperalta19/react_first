import React from 'react';
import './App.css';
import ListView from './componets/list_view';


function App() {
  return (
    <div>      
      <header className="Container-pag">
        <div style={ {margin: '1rem'}}>
        <ListView></ListView>
        </div>      
      </header>
    </div>
  );
}

export default App;
