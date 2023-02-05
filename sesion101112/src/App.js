import React, {useState} from 'react';
import './App.css';


function App() {

    const [colores, setColores] = useState('#000000');
    const[manageInterval, setManageInterval] = useState(0);

    const getColor = () => Math.floor(Math.random() * 256);

    const generateHex = () =>{
      const rgb ={
        r: getColor(),
        g: getColor(),
        b: getColor(),
      }; return setColores(getHex(rgb.r, rgb.g, rgb.b))
    }

    const getHex = (red,green,blue) =>{
      return(
        '#'+ [red,green,blue].map((c)=>{
          const hex =c.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        })
        .join('')
      );
    };

    const onChangeColor = () => {
      return setManageInterval(setInterval(generateHex, 500));
    };

    const onStopChangeColor = () => {
      return clearInterval(manageInterval);
    };

    const onClickChangeColor = () => {
      return clearInterval(manageInterval);
    };

  return (
    <div className="App">
      <header className="App-header">
      <div onMouseOver={onChangeColor} 
        onMouseLeave={onStopChangeColor}
        onDoubleClick={onClickChangeColor}
      style={{background: colores, width: '255px', height: '255px'}} ></div>
        <p style={{color: colores}}>
          Colores
        </p>
      </header>
    </div>
  );
}

export default App;
