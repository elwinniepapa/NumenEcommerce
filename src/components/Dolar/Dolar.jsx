import { useState, useEffect } from 'react';

const Dolar = () => {

    const [dolar, setDolar] = useState([]);

    //Con esto le pongo un freno al hook, sino se ejecuta constantemente
    useEffect(() => {
        //consulto la api, luego cuando recibo hago algo -> .then
        //con esto recibo lo que yo quiero de la api, construyo un return personalizado
        fetch("https://criptoya.com/api/dolar")
            .then(response => response.json())
            .then(({ blue, ccl, mep, solidario }) => {
                const moneda = <>
                    <h3>Cotizaciones del dolar</h3>
                    <p>Blue: {blue}</p>
                    <p>CCL: {ccl}</p>
                    <p>Mep: {mep}</p>
                    <p>Solidario: {solidario}</p>
                </>
                //seteo el valor para retornar en mi estado
                setDolar(moneda);
                console.log(dolar)
            })
    }, []);

    //consulto la api, luego cuando recibo hago algo -> .then
    //con esto recibo todo lo de la api
    /*fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(dolar => console.log(dolar))*/

    //consulto la api, luego cuando recibo hago algo -> .then
    //con esto recibo lo que yo quiero de la api
    /*fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({blue, ccl, mep, solidario}) => {console.log(blue, ccl, mep, solidario)})*/




    return (
        <div>
            {dolar}
        </div>
    );
}

export default Dolar;
