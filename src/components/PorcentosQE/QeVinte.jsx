import { useContext, useRef } from "react";
import { Button } from "../../hooks/useButton.jsx";
import { calcularVinteQe } from "./porcentagensQe.js";
import { CalcContext } from "../../context/CalcContext.jsx";
import { useEnterSubmit } from "../../hooks/useEnterSubmit.jsx";

export function QeVinte() {
    const {
        vinteQe, setVinteQe, resultadoVinteQe, setResultadoVinteQe
    } = useContext(CalcContext);
    const btnRef = useRef(null);
    const enterProps = useEnterSubmit(btnRef);

    function calcular6() {
        const calculado = calcularVinteQe(vinteQe);
        setResultadoVinteQe(calculado);
    };

    return(
        <>
            <div className="container">
                <h3>Detalhe: se chegar na Sobra e nenhum partido/federação tiver pelo menos um candidato sobrando com 20% QE, será eleito o candidato mais votado que sobra do partido/federação que ganhou a rodada</h3>
                <br/>
                <input id="vinte-qe"
                className="placeholder-texto percent"
                placeholder="Digite o QE para calcular 20%"
                value={vinteQe}
                onChange={e => setVinteQe(e.target.value)}
                name="vinteQe"
                {...enterProps}
                />
                <Button onClick={calcular6}
                        id="botao-vinte-qe" className="btn percent"
                        ref={btnRef}
                >
                    Calcular
                </Button>
                <br/><br/>
                <span id="resultado-vinte-qe" className="result">
                    Resultado: {resultadoVinteQe}
                </span>
            </div>
            <br/><br/><hr/><br/>
        </>
    );
};
