import { useState } from "react";
import { Button } from "../../hooks/useButton.jsx";
import { calcularOitentaQe } from "./porcentagensQe.js";

export function QeOitenta() {
    const [oitentaQe, setOitentaQe] = useState("");
    const [resultado, setResultado] = useState("");

    function calcular() {
        const calculado = calcularOitentaQe(oitentaQe);
        setResultado(calculado);
    };

    return(
        <>
            <div className="container">
                <h3>O partido/coligação só pode participar da Sobra se tiver recebido votos pelo menos igual a 80% do QE, ainda que tenha tido QP 0</h3>
                <br/>
                <input id="oitenta-qe"
                className="placeholder-texto"
                placeholder="Digite o QE para calcular 80%"
                value={oitentaQe}
                onChange={e => setOitentaQe(e.target.value)}
                name="oitentaQe"
                />
                <Button onClick={calcular} id="botao-oitenta-qe" className="btn">Calcular</Button>
                <br/><br/>
                <span id="resultado-oitenta-qe" className="result">
                    Resultado: {resultado}
                </span>
            </div>
            <br/><hr/><br/>
        </>
    );
};
