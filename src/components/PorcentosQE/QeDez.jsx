import { useState } from "react";
import { Button } from "../../hooks/useButton.jsx";
import { calcularDezQe } from "./porcentagensQe.js";

export function QeDez() {
    const [dezQe, setDezQe] = useState("");
    const [resultado, setResultado] = useState("");

    function calcular() {
        const calculado = calcularDezQe(dezQe);
        setResultado(calculado);
    };

    return(
        <>
            <div className="container">
                <h3>Se o partido/federação teve QP 0, não vai eleger agora. Se teve QP 2, por exemplo, veja se os dois candidatos mais votados desse partido receberam votos pelo menos igual a 10% do QE, se um deles não recebeu, tal vaga fica para a Sobra, e assim sucessivamente para todos os partidos que tiveram QP maior que 0</h3>
                <br/>
                <input id="dez-qe"
                className="placeholder-texto"
                placeholder="Digite o QE para calcular 10%"
                value={dezQe}
                onChange={e => setDezQe(e.target.value)}
                name="dezQe"
                />
                <Button onClick={calcular} id="botao-dez-qe" className="btn">Calcular</Button>
                <br/><br/>
                <span id="resultado-dez-qe" className="result">
                    Resultado: {resultado}
                </span>
            </div>
            <br/><hr/><br/>
        </>
    );
};
