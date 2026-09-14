import { useContext, useRef } from "react";
import { calcularQE } from "./qe.js";
import { Button } from "../../hooks/useButton.jsx";
import { CalcContext } from "../../context/CalcContext.jsx";
import { useEnterSubmit } from "../../hooks/useEnterSubmit.jsx";

export function Qe() {
    const {
        vve, setVve, vp, setVp, resultadoQe, setResultadoQe
    } = useContext(CalcContext);
    const btnRef = useRef(null);
    const enterProps = useEnterSubmit(btnRef);

    function calcular1(){
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
                {...enterProps}
                />
                <input id="num-vp"
                className="placeholder-texto"
                placeholder="Nº de Vagas do Parlamento"
                value={vp}
                onChange={e => setVp(e.target.value)}
                name="vp"
                {...enterProps}
                />
                <br/><br/>
                <Button onClick={calcular1}
                        id="botao-qe" className="btn"
                        ref={btnRef}
                >
                    Calcular
                </Button>
                <br/><br/>
                <span id="resultado-qe" className="result">
                    Resultado: {resultadoQe}
                </span>
            </div>
            <br/><hr/><br/>
        </>
    );
};
