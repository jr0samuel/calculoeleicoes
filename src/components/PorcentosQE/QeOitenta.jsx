import { useContext, useRef } from "react";
import { Button } from "../../hooks/useButton.jsx";
import { calcularOitentaQe } from "./porcentagensQe.js";
import { CalcContext } from "../../context/CalcContext.jsx";
import { useEnterSubmit } from "../../hooks/useEnterSubmit.jsx";

export function QeOitenta() {
    const {
        oitentaQe, setOitentaQe, resultadoOitentaQe, setResultadoOitentaQe
    } = useContext(CalcContext);
    const btnRef = useRef(null);
    const enterProps = useEnterSubmit(btnRef);

    function calcular4() {
        const calculado = calcularOitentaQe(oitentaQe);
        setResultadoOitentaQe(calculado);
    };

    return(
        <>
            <div className="container">
                <h3>O partido/federação só pode participar da Sobra se tiver recebido votos pelo menos igual a 80% do QE, ainda que tenha tido QP 0</h3>
                <br/>
                <input id="oitenta-qe"
                className="placeholder-texto percent"
                placeholder="Digite o QE para calcular 80%"
                value={oitentaQe}
                onChange={e => setOitentaQe(e.target.value)}
                name="oitentaQe"
                {...enterProps}
                />
                <Button onClick={calcular4}
                        id="botao-oitenta-qe" className="btn percent"
                        ref={btnRef}
                >
                    Calcular
                </Button>
                <br/><br/>
                <span id="resultado-oitenta-qe" className="result">
                    Resultado: {resultadoOitentaQe}
                </span>
            </div>
            <br/><hr/><br/>
        </>
    );
};
