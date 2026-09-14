import { useContext, useRef } from "react";
import { calcularSobraInicial } from "./sobraInicial.js";
import { Button } from "../../hooks/useButton.jsx";
import { CalcContext } from "../../context/CalcContext.jsx";
import { useEnterSubmit } from "../../hooks/useEnterSubmit.jsx";

export function SobraInicial() {
    const {
        siVvPc, setSiVvPc, siQpPc, setSiQpPc, resultadoSi, setResultadoSi
    } = useContext(CalcContext);
    const btnRef = useRef(null);
    const enterProps = useEnterSubmit(btnRef);

    function calcular5(){
        const valor = calcularSobraInicial(siVvPc, siQpPc);
        setResultadoSi(valor === "" ? "" : valor);
    };

    return(
        <>
            <div className="container">
                <h3>Na primeira rodada, esse cálculo vale para todos os partidos/federações que estão na Sobra, depois vale só para os que não conseguiram vagas durante as rodadas, e os que conseguiram, fazem o próximo cálculo</h3>
                <br/>
                <input id="sivvpc"
                className="placeholder-texto"
                placeholder="Votos Válidos do partido/federação"
                value={siVvPc}
                onChange={e => setSiVvPc(e.target.value)}
                name="siVvPc"
                {...enterProps}
                />
                <input id="siqppc"
                className="placeholder-texto"
                placeholder="QP do partido/federação"
                value={siQpPc}
                onChange={e => setSiQpPc(e.target.value)}
                name="siQpPc"
                {...enterProps}
                />
                <br/><br/>
                <Button onClick={calcular5}
                        id="botao-si" className="btn"
                        ref={btnRef}
                >
                    Calcular
                </Button>
                <br/><br/>
                <span id="resultado-si" className="result">
                    Resultado: {resultadoSi}
                </span>
            </div>
            <br/><hr/><br/>
        </>
    );
};
