import './fila.css';
import $ from 'jquery';

const Fila = ({ aleatoria, palabra, index }) => {
    const yellow = '#c9b458';
    const green = '#6aaa64';
    const grey = '#787c7e';

    const jq = (i, isNotIn) => {
        if (isNotIn) 
            $(`#${index}-${i}`).css('background-color', grey);
        
        else
            $(`#${index}-${i}`).css('background-color', palabra[i] === aleatoria[i] ? green : yellow);
    }

    const crearFila = () => {
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push(<div key={i} id={`${index}-${i}`} className="each">{palabra ? palabra[i] : null}
                {palabra ? (aleatoria.includes(palabra[i]) ? jq(i) : jq(i, -1)) : null}</div>);
        }

        return result;
    }

    return crearFila();
}

export default Fila;