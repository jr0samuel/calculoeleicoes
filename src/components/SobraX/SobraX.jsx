import { useContext, useRef } from "react";
import { calcularSobraX } from "./sobraX.js";
import { Button } from "../../hooks/useButton.jsx";
import { CalcContext } from "../../context/CalcContext.jsx";
import { useEnterSubmit } from "../../hooks/useEnterSubmit.jsx";

export function SobraX() {
    const {
        sxVvPc, setSxVvPc, sxQpPc, setSxQpPc, sxVsPc, setSxVsPc, resultadoSx, setResultadoSx
    } = useContext(CalcContext);
    const btnRef = useRef(null);
    const enterProps = useEnterSubmit(btnRef);

    function calcular7(){
        const valor = calcularSobraX(sxVvPc, sxQpPc, sxVsPc);
        setResultadoSx(valor === "" ? "" : valor);
    };

    return(
        <>
            <div className="container">
                <h3>Detalhe: não precisa fazer o cálculo anterior de novo, guarde o resultado dos partidos/federações que não elegeram na Sobra e apenas faça o cálculo abaixo para os que ganharam alguma vaga, de acordo com o número de vagas obtidas nas Sobras</h3>
                <br/>
                <input id="sxvvpc"
                className="placeholder-texto"
                placeholder="Votos Válidos do partido/federação"
                value={sxVvPc}
                onChange={e => setSxVvPc(e.target.value)}
                name="sxVvPc"
                {...enterProps}
                />
                <input id="sxqppc"
                className="placeholder-texto"
                placeholder="QP do partido/federação"
                value={sxQpPc}
                onChange={e => setSxQpPc(e.target.value)}
                name="sxQpPc"
                {...enterProps}
                />
                <input id="sxvspc"
                className="placeholder-texto"
                placeholder="Vagas obtidas nas Sobras"
                value={sxVsPc}
                onChange={e => setSxVsPc(e.target.value)}
                name="sxVsPc"
                {...enterProps}
                />
                <br/><br/>
                <Button onClick={calcular7}
                        id="botao-sx" className="btn"
                        ref={btnRef}
                >
                    Calcular
                </Button>
                <br/><br/>
                <span id="resultado-sx" className="result">
                    Resultado: {resultadoSx}
                </span>
            </div>
            <br/>
        </>
    );
};
