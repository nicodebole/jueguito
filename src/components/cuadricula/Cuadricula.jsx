import './cuadricula.css';
import Fila from '../fila/Fila';

const Cuadricula = ({ aleatoria, palabras }) => {

    const crearCuadricula = () => {
        const result = [];
        for(let i = 0; i < 6; i++) 
            result.push(<Fila aleatoria={aleatoria} palabra={palabras[i]} index={i} key={i}></Fila>)

        return result;
    }

    return <div className='container'>
        {crearCuadricula()}
    </div>
}

export default Cuadricula;