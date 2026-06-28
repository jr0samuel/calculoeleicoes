import { useState } from "react";
import { Button } from "../../hooks/useButton.jsx";
import { calcularQP } from "./qp.js";

export function Qp() {
    const [vvpc, setVvpc] = useState("");
    const [qe, setQe] = useState("");
    const [resultado, setResultado] = useState("");

    function calcular() {
        const calculado = calcularQP(vvpc, qe);
        setResultado(calculado);
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
                />
                <input id="qe"
                className="placeholder-texto"
                placeholder="Quociente Eleitoral"
                value={qe}
                onChange={e => setQe(e.target.value)}
                name="qe"
                />
                <br/><br/>
                <Button onClick={calcular} id="botao-qp" className="btn">Calcular</Button>
                <br/><br/>
                <span id="resultado-qp" className="result">
                    Resultado: {resultado}
                </span>
            </div>
            <br/><hr/><br/>
        </>
    );
};
