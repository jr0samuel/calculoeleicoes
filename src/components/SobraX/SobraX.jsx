import { useState } from "react";
import { calcularSobraX } from "./sobraX.js";
import { Button } from "../../hooks/useButton.jsx";

export function SobraX() {
    const [sxVvPc, setSxVvPc] = useState("");
    const [sxQpPc, setSxQpPc] = useState("");
    const [sxVsPc, setSxVsPc] = useState("");
    const [resultado, setResultado] = useState("");

    function calcular(){
        const valor = calcularSobraX(sxVvPc, sxQpPc, sxVsPc);
        setResultado(valor === "" ? "" : valor);
    };

    return(
        <>
            <div className="container">
                <h3>O cálculo abaixo vale somente para os partidos/coligações que ganharam alguma vaga na sobra, para isso, digite também a quantidade de vagas obtidas nas rodadas</h3>
                <br/>
                <input id="sxvvpc"
                className="placeholder-texto"
                placeholder="Votos Válidos do partido/coligação"
                value={sxVvPc}
                onChange={e => setSxVvPc(e.target.value)}
                name="sxVvPc"
                />
                <input id="sxqppc"
                className="placeholder-texto"
                placeholder="QP do partido/coligação"
                value={sxQpPc}
                onChange={e => setSxQpPc(e.target.value)}
                name="sxQpPc"
                />
                <input id="sxvspc"
                className="placeholder-texto"
                placeholder="Vagas obtidas nas sobras"
                value={sxVsPc}
                onChange={e => setSxVsPc(e.target.value)}
                name="sxVsPc"
                />
                <br/><br/>
                <Button onClick={calcular} id="botao-sx" className="btn">Calcular</Button>
                <br/><br/>
                <span id="resultado-sx" className="result">
                    Resultado: {resultado}
                </span>
            </div>
            <br/>
        </>
    );
};
