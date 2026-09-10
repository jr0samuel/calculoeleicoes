import { useContext } from "react";
import { calcularQE } from "./qe.js";
import { Button } from "../../hooks/useButton.jsx";
import { CalcContext } from "../../context/CalcContext.jsx";

export function Qe() {
    const {
        vve, setVve, vp, setVp, resultadoQe, setResultadoQe
    } = useContext(CalcContext);

    function calcular(){
        const calculado = calcularQE(vve, vp);
        setResultadoQe(calculado);
    };

    return(
        <>
            <div className="container">
                <h3>Comece calculando o Quociente Eleitoral (QE)</h3>
                <br/>
                <input id="vv-e"
                className="placeholder-texto"
                placeholder="Votos Válidos da Eleição"
                value={vve}
                onChange={e => setVve(e.target.value)}
                name="vve"
                />
                <input id="num-vp"
                className="placeholder-texto"
                placeholder="Nº de Vagas do Parlamento"
                value={vp}
                onChange={e => setVp(e.target.value)}
                name="vp"
                />
                <br/><br/>
                <Button onClick={calcular} id="botao-qe" className="btn">Calcular</Button>
                <br/><br/>
                <span id="resultado-qe" className="result">
                    Resultado: {resultadoQe}
                </span>
            </div>
            <br/><hr/><br/>
        </>
    );
};
