import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NavbarView from './componets/NavbarView';

function App() {
  return (
    <div className="Container-pag">
        <div style={ {margin: '1rem'}}>
            <NavbarView/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Login" element={<Login/>} />
                    <Route path="/Register" element={<Register/>} />
                    <Route path="/Dashboard" element={<Dashboard/>} />
                </Routes>
            </BrowserRouter>
        </div>
    </div>    
  );
}

export default App;
