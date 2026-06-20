import { useState } from "react";
import { calcularSobraInicial } from "./sobraInicial.js";
import { Button } from "../../hooks/useButton.jsx";

export function SobraInicial() {
    const [siVvPc, setSiVvPc] = useState("");
    const [siQpPc, setSiQpPc] = useState("");
    const [resultado, setResultado] = useState("");

    function calcular(){
        const valor = calcularSobraInicial(siVvPc, siQpPc);
        setResultado(valor === "" ? "" : valor);
    };

    return(
        <>
            <div className="container">
                <h3>Na primeira rodada, esse cálculo vale para todos os partidos/coligações que tiveram pelo menos 80% do QE, depois vale só para os que não conseguiram vagas durante as rodadas, e os que conseguiram, fazem o próximo cálculo de acordo com o número de vagas que conseguiram</h3>
                <br/>
                <input id="sivvpc"
                className="placeholder-texto"
                placeholder="Votos Válidos do partido/coligação"
                value={siVvPc}
                onChange={e => setSiVvPc(e.target.value)}
                name="siVvPc"
                />
                <input id="siqppc"
                className="placeholder-texto"
                placeholder="QP do partido/coligação"
                value={siQpPc}
                onChange={e => setSiQpPc(e.target.value)}
                name="siQpPc"
                />
                <br/><br/>
                <Button onClick={calcular} id="botao-si" className="btn">Calcular</Button>
                <br/><br/>
                <span id="resultado-si" className="result">
                    Resultado: {resultado}
                </span>
            </div>
            <br/><hr/><br/>
        </>
    );
};
