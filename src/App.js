import { useEffect, useState } from 'react';
import './App.css';
import Cuadricula from './components/cuadricula/Cuadricula';

function App() {
  const [datos, setDatos] = useState([]);
  const [ronda, setRonda] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);


  useEffect(() => {
    if(datos[datos.length-1] === 'GATOS')
      setWin(true);
  }, [datos])

  useEffect(() => {
    if (ronda === 6 || win)
      setGameOver(true);
  }, [ronda, win])

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <div>
      {
        !gameOver && <div className='partida-container'>
          <Cuadricula palabras={datos}></Cuadricula>
          <div className='search'>
            <input id='palabra'></input>
            <button onClick={() => 
              document.getElementById('palabra').value.length === 5 ? setDatos(prev => ([...prev, document.getElementById('palabra').value.toUpperCase()])) & setRonda(prev => prev + 1) : alert('Pone 5 letritas, dale')}>Click</button>
          </div>
        </div>
        ||
        <div className='gameover-container'>
          <h1>GAME OVER</h1>
          {win && <h1>GANASTE</h1>}
          <button onClick={refreshPage}>JUGAR DE NUEVO</button>
        </div>
      }
    </div>
  );
}

export default App;