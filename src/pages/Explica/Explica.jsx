import { useEffect } from "react";
import { alterarHead } from "../../utils/favicon.js";
import { Link } from "react-router-dom";
import styles from './Explica.module.css';

export default function Explica () {
    useEffect(() => {
        alterarHead('/icon_urna.png', 'Explicação do Cálculo');
    }, []);

    return (
        <main className={styles.artigo}>
            <section className={styles.titulo}>
                <h4>
                    Como funcionam os cálculos para eleger vereadores e deputados estaduais e federais?
                </h4>
                <Link to="/">Home</Link>{" "}
            </section>
            <section className={styles.articulo}>
                <div className={`${styles.parte_um}`}>
                    <a  className={styles.linkss}
                        target="_blank"
                        href="https://github.com/user-attachments/assets/11965aa1-29bd-4241-9354-97ee5e6425b4"
                    >
                        Imagem com exemplo prático e real dos cálculos
                    </a>
                    <br/><br/>
                    Primeiro, calcule o quociente eleitoral (QE). É a divisão entre os votos válidos da eleição e a quantidade de vagas. Com o resultado dessa divisão, faça o arredondamento com o primeiro número depois da vírgula, se for 5 ou menos, arredonda para baixo, se for 6 ou mais, arredonda para cima. E já faça 10%, 80% e 20% do resultado do QE, pois esses valores serão usados posteriormente.
                    <br/><br/>
                    Em seguida, o quociente partidário (QP). É a divisão entre os votos válidos do partido e o QE. Sempre arredonda para baixo. Faça isso com todos os partidos. O resultado é a quantidade de candidatos de cada partido que serão eleitos nesse momento da seguinte forma: se o QP de tal partido for 2, por exemplo, veja os dois candidatos mais votados desse partido, se um deles recebeu votos igual ou mais que 10% do QE e o outro menos, aquele que teve 10% ou mais será eleito e a vaga do outro é perdida e vai para a Sobra.
                    <br/><br/>
                    Se nenhum partido tiver QP pelo menos 1, os candidatos serão eleitos de acordo com o número de votos recebidos individualmente, assim como prefeito, governador, presidente e senador.
                    <br/><br/>
                    O que são os "puxadores de votos"? São candidatos que recebem muitos votos, isso favorece o partido a ter QP alto e eleger mais de um na primeira fase, que é essa fase do QP e dos 10% do QE. Portanto, o "puxador" não puxa ninguém de forma direta. Outra coisa, não há "puxada" nas Sobra, que é a próxima fase, porém, como o partido teve muitos votos, isso geralmente favorece, pelo menos no primeiro cálculo da Sobra.
                    <br/><br/>
                    O processo da Sobra é feito em rodadas. Para participar da Sobra, o partido precisa ter recebido votos igual ou mais que 80% do QE, mesmo se teve QP 0.
                    <br/><br/>
                    A primeira rodada é assim: votos válidos do partido dividido pelo QP do partido + 1. Faça isso com todos os partidos que podem participar da Sobra. O partido que tiver o maior resultado elege um candidato que recebeu votos igual ou mais que 20% do QE, se nenhum candidato recebeu, passa para o próximo partido da lista, e assim sucessivamente. Se nenhum candidato teve pelo menos 20% dentre todos os partidos que estão na Sobra, será eleito o candidato do partido que teve o maior resultado na rodada, isso vale para todas as rodadas sucessivamente.
                    <br/><br/>
                    A segunda rodada é assim: faça o cálculo anterior para todos os partidos que não elegeram nenhum candidato na Sobra e faça o seguinte cálculo para os partidos que elegeram alguém na Sobra: votos válidos do partido dividido pelo QP do partido + 1 + quantidade de vagas ganhas na Sobra, ou seja, se o partido elegeu dois na Sobra, coloque 2, e assim sucessivamente.
                </div>
                <div className={`${styles.parte_dois}`}>
                    <br/>
                    <div className={styles.spann}>Veja especialmente o Capítulo IV a partir do Art. 105 do Código Eleitoral.</div>
                    <br/>
                    <a className={styles.linkss} target="_blank"
                    href="https://www.planalto.gov.br/ccivil_03/Leis/L4737compilado.htm"
                    >
                        https://www.planalto.gov.br/ccivil_03/Leis/L4737compilado.htm
                    </a>
                    <br/><br/>
                    <a className={styles.links} target="_blank"
                    href="https://www.tre-sp.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tre-sp.jus.br/comunicacao/arquivos/eleicoes-2024-quociente-eleitoral/@@download/file/Documento%20quociente-1-mesclado%20%284%29.pdf"
                    >
                        https://www.tre-sp.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tre-sp.jus.br/comunicacao/arquivos/eleicoes-2024-quociente-eleitoral/@@download/file/Documento%20quociente-1-mesclado%20%284%29.pdf
                    </a>
                    <br/><br/>
                    <a className={styles.links} target="_blank"
                    href="https://www.tre-sp.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tre-sp.jus.br/eleicoes/eleicoes-anteriores/eleicoes-2022/arquivos/calculo-do-quociente-eleitoral/@@download/file/quociente_eleitoral_v2.pdf"
                    >
                        https://www.tre-sp.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tre-sp.jus.br/eleicoes/eleicoes-anteriores/eleicoes-2022/arquivos/calculo-do-quociente-eleitoral/@@download/file/quociente_eleitoral_v2.pdf
                    </a>
                    <br/><br/>
                    <a className={styles.links} target="_blank"
                    href="https://www.justicaeleitoral.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.justicaeleitoral.jus.br/arquivos/tre-sp-distribuicao-de-cadeiras-pelo-sistema-de-representacao-proporcional/@@download/file/tre-sp-distribuicao-de-cadeiras-pelo-sistema-de-representacao-proporcional.pdf"
                    >
                        https://www.justicaeleitoral.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.justicaeleitoral.jus.br/arquivos/tre-sp-distribuicao-de-cadeiras-pelo-sistema-de-representacao-proporcional/@@download/file/tre-sp-distribuicao-de-cadeiras-pelo-sistema-de-representacao-proporcional.pdf
                    </a>
                </div>
            </section>
        </main>
    );
};
