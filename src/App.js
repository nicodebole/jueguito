import { useEffect, useState } from 'react';
import './App.css';
import Cuadricula from './components/cuadricula/Cuadricula';

function App() {
  const [datos, setDatos] = useState([]);
  const [ronda, setRonda] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [palabraAleatoria, setPalabraAleatoria] = useState('');

  const opciones = [
    'AGUDO', 'APODO', 'ARCOS', 'AEREA', 'BALAS',
    'BAYAS', 'BESOS', 'BONDI', 'BOTAS', 'CAJAS',
    'CANAS', 'CAPAS', 'CASAS', 'CAVAS', 'CAIDA',
    'CAÑAS', 'CEPAS', 'CERDO', 'CIEGO', 'COGER',
    'CONOS', 'COPAS', 'CORAL', 'CORSA', 'CRUJE',
    'DATOS', 'DEDOS', 'DIJES', 'DONAS', 'DOTES',
    'EMOJI', 'ENTES', 'ENVIO', 'ERIZO', 'EUROS',
    'FALLE', 'FETOS', 'FUGAS', 'GAFAS', 'GATOS',
    'GOLES', 'HILOS', 'JERGA', 'LABIA', 'LACRA',
    'LATAS', 'LEGOS', 'LEJOS', 'LIBRO', 'LOCOS',
    'LUCES', 'MANOS', 'MAPAS', 'MARES', 'MESAS',
    'METAS', 'MITOS', 'MODOS', 'MONOS', 'MORAS',
    'MORRO', 'MOÑOS', 'NABOS', 'NAZIS', 'NUDOS',
    'OBRAS', 'OLLAS', 'ONZAS', 'OPERA', 'ORCAS',
    'OVULO', 'PATOS', 'PAÑAL', 'PECAS', 'PENES',
    'PERAS', 'PESAS', 'PIPAS', 'PLANTA', 'PLENO',
    'PODER', 'POZOS', 'QUESO', 'RATAS', 'REDES',
    'REJAS', 'REYES', 'RIFAS', 'RIMAN', 'ROCAS',
    'RUNAS', 'SAPOS', 'SONAR', 'SUCIO', 'SUELA',
    'SUSHI', 'TACOS', 'TAPAS', 'TEMAS', 'TETAS',
    'TOPOS', 'URNAS', 'VACAS', 'VAGOS', 'VINOS',
    'VOLAR', 'VOTAR', 'YOGUR', 'ZORRO', 'ZURDO'
  ]


  useEffect(() => {
    setPalabraAleatoria(opciones[Math.floor(Math.random() * opciones.length)]);
  }, [])

  useEffect(() => {
    if (datos[datos.length - 1] === palabraAleatoria)
      setWin(true);

    console.log(palabraAleatoria)
  }, [datos])

  useEffect(() => {
    if (ronda === 6 || win) {
      setTimeout(() => {
        setGameOver(true);
      }, 500)
    }

  }, [ronda, win])

  function refreshPage() {
    window.location.reload(false);
  }

  const checkWin = () => {
    if (palabraAleatoria === document.getElementById('palabra').value)
      setWin(true);
  }



  return (
    <div>
        {
          !gameOver &&
          <div className='partida-container'>
            <Cuadricula aleatoria={palabraAleatoria} palabras={datos}></Cuadricula>
            <div className='search'>
              <input id='palabra'></input>
              <button onClick={() =>
                document.getElementById('palabra').value.length === 5 ? setDatos(prev => ([...prev, document.getElementById('palabra').value.toUpperCase()])) & setRonda(prev => prev + 1) : alert('Pone 5 letritas, dale') & checkWin()}>Click</button>
            </div>
          </div>
          ||
          <div className='gameover-container'>
            <h1>{win ? 'GANASTE' : 'GAME OVER'}</h1>
            <button onClick={refreshPage}>JUGAR DE NUEVO</button>
          </div>
        }
    </div>
  );
}

export default App;