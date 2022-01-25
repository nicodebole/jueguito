import './cuadricula.css';
import Fila from '../fila/Fila';

const Cuadricula = ({ palabras }) => {
    const crearCuadricula = () => {
        const result = [];
        for(let i = 0; i < 6; i++) 
            result.push(<Fila palabra={palabras[i]} index={i} key={i}></Fila>)

        return result;
    }

    return <div className='container'>
        {crearCuadricula()}
    </div>
}

export default Cuadricula;