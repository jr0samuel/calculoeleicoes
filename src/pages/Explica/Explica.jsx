import { useEffect } from "react";
import { alterarHead } from "../../utils/favicon.js";
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
            </section>
            <section className={styles.articulo}>
                <div className={`${styles.parte_um}`}>
                    Vamos fazer um exemplo de eleição municipal com uma cidade real. Primeiro, precisa dos dados: votos, partidos/coligações, candidatos. Eu encontrei os dados em alguns sites de notícias e no TSE, mas precisei juntar tudo, porque nenhum site foi devidamente claro, porém a cidade é pequena, então não foi tão difícil, só foi meio chato.
                    <br/><br/>
                    Nessa cidade, são 11 vagas (não precisava disso, poderia ser 9, mas isso é outro assunto). E quase não houve federações, só duas foram formadas, sendo que numa delas, apenas um partido recebeu votos, e na outra, um partido recebeu a maioria e um outro partido contribuiu com um único voto, mas nenhuma dessas federações conseguiu votos para eleger.
                    <br/><br/>
                    Vamos aos cálculos. Primeiro, o quociente eleitoral (QE). Nessa cidade, foi 1764, que é a quantidade mínima de votos que os partidos precisam para eleger nessa primeira parte. Apenas 6 partidos (todos sem federação) conseguiram.
                    <br /><br />
                    O cálculo do QE é a divisão entre os votos válidos da eleição e a quantidade de vagas do parlamento, seja a câmara de vereadores ou a assembleia legislativa estadual ou a câmara do congresso federal. Com o resultado dessa divisão, faça o arredondamento com o primeiro número depois da vírgula, se for 5 ou menos, arredonda para baixo, se for 6 ou mais, arredonda para cima (esse não é o arredondamento comum da matemática, mas é assim que funciona aqui, e dá um pouco de trabalho no código em linguagem de programação).
                    <br/><br/>
                    Aproveite para fazer 10%, 80% e 20% do QE, nessa ordem mesmo, esses valores serão usados posteriormente. 10% (176) é a quantidade mínima de votos que os candidatos precisam para serem eleitos nessa primeira parte de acordo com o quociente partidário (QP), ou seja, se o QP do partido for 2, então pode eleger os dois candidatos mais votados do partido desde que tenham pelo menos 10%, se um deles não tiver, tal vaga ficará para a próxima parte, que é o cálculo da Sobra, o qual veremos mais adiante.
                    <br/><br/>
                    O cálculo do (QP) é a divisão entre os votos válidos do partido e o QE. Sempre arredonda para baixo. Faça isso com todos os partidos. Observe a imagem abaixo. Nenhum partido teve QP maior que 1.
                    <br /><br />
                    <div>
                        <img src="/QP.png" alt="eleitos no QP" />
                    </div>
                    <br/>
                    Veja os partidos que tiveram QP igual a 0 e confira se a quantidade de votos que eles receberam foi pelo menos 80% do QE (1411). Se sim, eles vão para a Sobra. Repare que 1764 é 100% do QE. O partido precisa de pelo menos 80% para a Sobra, mas precisa de 100% para a primeira parte. Os partidos acima tiveram mais de 100% do QE, que é o QP igual a 1.
                    <br/><br/>
                    Se nenhum partido tiver QP pelo menos 1, os candidatos serão eleitos de acordo com o número de votos recebidos individualmente, assim como prefeito, governador, presidente e senador.
                    <br/><br/>
                    O processo da Sobra é feito em rodadas. Nessa cidade, serão 5 rodadas. Participarão os 6 partidos que passaram no QP e apenas um outro que conseguiu passar de 80%.
                    <br/><br/>
                    A primeira rodada é assim: votos válidos do partido dividido pelo QP do partido + 1 (soma 1 ao QP do partido). Faça isso com todos os partidos que podem participar da Sobra. O partido que tiver o maior resultado elege um candidato que recebeu votos pelo menos 20% do QE (352), se nenhum candidato desse partido recebeu, passa para o próximo partido da lista, e assim sucessivamente. Se nenhum candidato teve pelo menos 20% dentre todos os partidos que estão na Sobra, será eleito um candidato do partido que ganhou a rodada, isso vale para todas as rodadas. Veja a imagem abaixo.
                    <br/><br/>
                    <div>
                        <img src="/sobra1.png" alt="eleito na primeira sobra" />
                    </div>
                    <br/>
                    Repare que PL, REPUBLICANOS, PSD, UNIÃO BRASIL, PODEMOS e MDB tiveram QP 1 e PP teve QP 0. E aqui vem um detalhe do cálculo da Sobra: votos válidos do partido dividido pelo QP do partido + 1, esse + 1 é para o caso do partido que teve QP 0, então divide por 1, porque a matemática comum não permite dividir por 0 (não sei se a matemática avançada permite). Portanto, PP teve 1559 votos.
                    <br /><br />
                    Na segunda rodada, não precisa fazer o cálculo anterior de novo. Guarde o resultado dos partidos que perderam a rodada e faça o seguinte cálculo apenas com o partido que ganhou: votos válidos do partido dividido pelo QP do partido + 1 + quantidade de vagas ganhas na Sobra, ou seja, esse partido elegeu um agora, então faça a divisão dos votos do partido pelo QP + 1 + 1, e assim sucessivamente em todas as rodadas, como nas imagens abaixo. Se algum partido conseguir eleger 2 na Sobra, será QP + 1 + 2, e assim vai.
                    <br /><br />
                    <div>
                        <img src="/sobra2.png" alt="eleito na segunda sobra" />
                    </div>
                    <br />
                    <div>
                        <img src="/sobra3.png" alt="eleito na terceira sobra" />
                    </div>
                    <br />
                    <div>
                        <img src="/sobra4.png" alt="eleito na quarta sobra" />
                    </div>
                    <br />
                    <div>
                        <img src="/sobra5.png" alt="eleito na quinta sobra" />
                    </div>
                    <br />
                    Nessa cidade, se houvesse mais uma rodada, PL ficaria em primeiro, mas não elegeria, porque não tem mais candidato com 20%, então passaria para REPUBLICANOS, que ainda tem candidato com 20%. Isso nos leva ao assunto dos "puxadores de votos".
                    <br /><br />
                    O que são os "puxadores de votos"? São candidatos que recebem muitos votos individualmente, isso favorece o QP do partido para eleger na primeira fase, que é a fase do QP e dos 10% do QE. Portanto, o "puxador" não puxa ninguém de forma direta, não se esqueça que os candidatos precisam ter pelo menos 10% na primeira fase e 20% na Sobra. Outra coisa, não há "puxada" nas Sobra, porque são rodadas independentes, porém, como o partido teve muitos votos, isso favorece, principalmente no primeiro cálculo da Sobra, já no segundo, fica difícil, porque aumenta 1 na divisão, mas nessa cidade, PL e REPUBLICANOS foram bem até no segundo cálculo. E para encerrar, todos esses partidos que elegeram nessa cidade são do centrão, mas isso é outro assunto, aproveite os cálculos, espero ter explicado bem.
                </div>
                <div className={`${styles.parte_dois}`}>
                    <span>Adendos:</span>
                    <br/><br/>
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
