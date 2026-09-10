import { useContext } from "react";
import { calcularSobraX } from "./sobraX.js";
import { Button } from "../../hooks/useButton.jsx";
import { CalcContext } from "../../context/CalcContext.jsx";

export function SobraX() {
    const {
        sxVvPc, setSxVvPc, sxQpPc, setSxQpPc, sxVsPc, setSxVsPc, resultadoSx, setResultadoSx
    } = useContext(CalcContext);

    function calcular(){
        const valor = calcularSobraX(sxVvPc, sxQpPc, sxVsPc);
        setResultadoSx(valor === "" ? "" : valor);
    };

    return(
        <>
            <div className="container">
                <h3>O cálculo abaixo vale somente para os partidos/federações que ganharam alguma vaga na sobra, para isso, digite também a quantidade de vagas obtidas nas rodadas</h3>
                <br/>
                <input id="sxvvpc"
                className="placeholder-texto"
                placeholder="Votos Válidos do partido/federação"
                value={sxVvPc}
                onChange={e => setSxVvPc(e.target.value)}
                name="sxVvPc"
                />
                <input id="sxqppc"
                className="placeholder-texto"
                placeholder="QP do partido/federação"
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
                    Resultado: {resultadoSx}
                </span>
            </div>
            <br/>
        </>
    );
};
