import { useState } from 'react';
import './App.css';
import Cuadricula from './components/cuadricula/Cuadricula';

function App() {
  // const [ chance, setChance ] = useState('');
  // const [ fila, setFila ] = useState(0);
  const [datos, setDatos] = useState([]);

  // useEffect(() => {
  //   console.log(chance);
  //   console.log(objCua)
  // }, [chance])

  return (
    <div>
      <Cuadricula palabras={datos}></Cuadricula>
      <input id='palabra'></input>
      <button onClick={() => setDatos(prev => ([...prev, document.getElementById('palabra').value]))}>Click</button>
    </div>
  );
}

export default App;