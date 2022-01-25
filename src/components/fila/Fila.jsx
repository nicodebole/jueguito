import './fila.css';
import $ from 'jquery';

const Fila = ({ palabra, index }) => {
    const ASACAR = 'gatos';

    const jq = (i) => {
        $(`#${index}-${i}`).css('background-color', palabra[i] === ASACAR[i] ? 'green' : 'blue');
    }

    const crearFila = () => {
        const result = [];
        for(let i = 0; i < 5; i++) {
            result.push(<div key={i} id={`${index}-${i}`} className="each">{palabra ? palabra[i] : null}{palabra ? (ASACAR.includes(palabra[i]) ? jq(i) : null) : null}</div>);
        }

        return result;
    }

    return crearFila();
}

export default Fila;