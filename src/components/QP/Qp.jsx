import { useContext, useRef } from "react";
import { Button } from "../../hooks/useButton.jsx";
import { calcularQP } from "./qp.js";
import { CalcContext } from "../../context/CalcContext.jsx";
import { useEnterSubmit } from "../../hooks/useEnterSubmit.jsx";

export function Qp() {
    const {
        vvpc, setVvpc, qe, setQe, resultadoQp, setResultadoQp
    } = useContext(CalcContext);
    const btnRef = useRef(null);
    const enterProps = useEnterSubmit(btnRef);

    function calcular2() {
        const calculado = calcularQP(vvpc, qe);
        setResultadoQp(calculado);
    };

    return(
        <>
            <div className="container">
                <h3>Agora calcule o Quociente Partidário (QP) de cada partido/federação</h3>
                <br/>
                <input id="vv-pc"
                className="placeholder-texto"
                placeholder="Votos válidos do partido/federação"
                value={vvpc}
                onChange={e => setVvpc(e.target.value)}
                name="vvpc"
                {...enterProps}
                />
                <input id="qe"
                className="placeholder-texto"
                placeholder="Quociente Eleitoral"
                value={qe}
                onChange={e => setQe(e.target.value)}
                name="qe"
                {...enterProps}
                />
                <br/><br/>
                <Button onClick={calcular2}
                        id="botao-qp" className="btn"
                        ref={btnRef}
                >
                    Calcular
                </Button>
                <br/><br/>
                <span id="resultado-qp" className="result">
                    Resultado: {resultadoQp}
                </span>
            </div>
            <br/><hr/><br/>
        </>
    );
};
