import { useState } from "react";
import { Button } from "../../hooks/useButton.jsx";
import { calcularVinteQe } from "./porcentagensQe.js";

export function QeVinte() {
    const [vinteQe, setVinteQe] = useState("");
    const [resultado, setResultado] = useState("");

    function calcular() {
        const calculado = calcularVinteQe(vinteQe);
        setResultado(calculado);
    };

    return(
        <>
            <div className="container">
                <h3>Confira qual partido/coligação venceu a rodada e veja se algum candidato recebeu votos pelo menos igual a 20% do QE, se nenhum recebeu, veja se o partido/coligação que ficou em segundo na rodada tem candidato com 20% do QE, e assim sucessivamente</h3>
                <br/>
                <input id="vinte-qe"
                className="placeholder-texto"
                placeholder="Digite o QE para calcular 20%"
                value={vinteQe}
                onChange={e => setVinteQe(e.target.value)}
                name="vinteQe"
                />
                <Button onClick={calcular} id="botao-vinte-qe" className="btn">Calcular</Button>
                <br/><br/>
                <span id="resultado-vinte-qe" className="result">
                    Resultado: {resultado}
                </span>
            </div>
            <br/><hr/><br/>
        </>
    );
};
