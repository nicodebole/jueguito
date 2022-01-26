import './fila.css';
import $ from 'jquery';

const Fila = ({ aleatoria, palabra, index }) => {
    // const ASACAR = 'GATOS';


    const jq = (i, isNot) => {
        if (isNot)
            $(`#${index}-${i}`).css('background-color', '#393839');
        else
            $(`#${index}-${i}`).css('background-color', palabra[i] === aleatoria[i] ? '#16c60c' : '#fff100');
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