import { useEffect } from "react";
import { alterarHead } from "../../utils/favicon";
import { Link } from "react-router-dom";
import './brazil.css';
export default function Brazil() {
    useEffect(() => {
        alterarHead('/brasil.png', 'BRASIL - cálculo da eleição');
        const margemAntiga = document.body.style.margin;
        const paddingAntigo = document.body.style.padding;
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        return () => {
            document.body.style.margin = margemAntiga;
            document.body.style.padding = paddingAntigo;
        };
    }, []);
    return (
        <main className="bandeira" role="img" aria-label="Bandeira do Brasil">
            <div className="clique">clique no centro do círculo da bandeira para ir até a página de cálculo da eleição</div>
            <div className="brazil-flags">
              <Link to="/calculo">
                <div className="brazil-flag"></div>
              </Link>
            </div>
        </main>
    );
};
