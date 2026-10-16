import { useEffect } from "react";
import { alterarHead } from "../../utils/favicon.js";
import styles from './Explica.module.css';
import { Link } from "react-router-dom";

export default function Explica () {
    useEffect(() => {
        alterarHead('/icon_urna.png', 'Explicação do Cálculo');
    }, []);

    return (
        <main className={styles.artigo}>
            <section className={styles.titulo}>
                <h4>Como funcionam os cálculos para eleger vereadores e deputados estaduais e federais?</h4>
            </section>
            <section className={styles.articulo}>
                <div className={`${styles.parte_um}`}>
                    Vamos fazer um exemplo de eleição municipal com uma cidade real. Primeiro, precisa dos dados: votos, partidos/federações, candidatos. Eu encontrei os dados em alguns sites de notícias e no TSE, mas precisei juntar e organizar tudo, porque nenhum site foi devidamente claro, porém a cidade é pequena, então não foi difícil, só foi chato.
                    <br /><br />
                    Nessa cidade, são 11 vagas (poderia ser menos, inclusive poderia ser menos que 9, o mínimo para qualquer cidade, até para cidades menores que essa, de acordo com a legislação, mas isso é outro assunto). Houve só duas federações, sendo que numa delas, apenas um partido recebeu votos, e na outra, um partido recebeu a maioria e outro contribuiu com um único voto, mas nenhuma dessas federações conseguiu votos para eleger.
                    <br /><br />
                    O primeiro cálculo é o quociente eleitoral (QE). É a base para todos os cálculos. Nessa cidade, foi 1764, que é a quantidade mínima de votos que os partidos/federações precisam para eleger na primeira parte. Apenas 6 partidos conseguiram (todos sem federação).
                    <br /><br />
                    Federação é a junção de alguns partidos para que as votações deles se juntem de modo a favorecer o ganho de vagas, por exemplo, esses partidos não conseguiriam ganhar vagas sozinhos, então se juntam, mas os candidatos são eleitos em seus respectivos partidos, por exemplo, se uma federação com dois partidos conseguiu uma vaga na primeira parte e na segunda parte, serão eleitos os candidatos mais votados independente do partido, e pode acontecer de um desses partidos ficar sem vaga na primeira e na segunda parte se não tiver candidato com votos suficientes.
                    <br /><br />
                    O cálculo do QE é a divisão entre os votos válidos da eleição (não conta brancos e nulos) e a quantidade de vagas do parlamento, seja a câmara de vereadores (11 nessa cidade) ou a assembleia legislativa estadual ou a câmara do congresso federal. Com o resultado dessa divisão, faça o arredondamento com o primeiro número depois da vírgula, se for 5 ou menos, arredonda para baixo, se for 6 ou mais, arredonda para cima.
                    <br /><br />
                    Aproveite para fazer 10%, 80% e 20% do QE, nessa ordem, e arredonde todos para baixo, esses valores serão usados posteriormente. 10% (176 nessa cidade) é a quantidade mínima de votos que os candidatos precisam para serem eleitos na primeira parte de acordo com o quociente partidário (QP), ou seja, se o QP do partido/federação for 2, pode eleger os dois candidatos mais votados desde que eles tenham pelo menos 10% QE, se um deles não tiver, tal vaga ficará para a próxima parte, que é a Sobra.
                    <br /><br />
                    O cálculo do (QP) é a divisão entre os votos válidos do partido/federação e o QE. Sempre arredonda para baixo. Faça isso com todos. Observe a imagem abaixo. Nessa cidade, nenhum teve QP maior que 1, e os que tiveram QP 1 preencheram a vaga, não deixaram para a Sobra, então só sobraram 5 para completar 11. Repare que 1764 é 100% QE, isso dá QP 1, 200% QE é QP 2, sucessivamente. Se todos os partidos/federação tiverem QP 0, os candidatos serão eleitos de acordo com o número de votos recebidos individualmente, assim como prefeito, governador, presidente e senador, independente do partido/federação.
                    <br /><br />
                    <div>
                        <img src="/QP.png" alt="eleitos no QP" />
                    </div>
                    <br />
                    O processo da Sobra é feito em rodadas. Nessa cidade, foram 5 rodadas. Participaram os 6 partidos que passaram no QP e apenas mais um outro que passou de 80% do QE (1411 nessa cidade). Um detalhe: não basta apenas o partido/federação ter 80% QP ou mais, também precisa ter pelo menos um candidato com 20% QE (352 nessa cidade), caso contrário, não participa da Sobra, porque não tem candidato para eleger nessa parte.
                    <br /><br />
                    A primeira rodada é assim: votos válidos do partido/federação dividido pelo seu respectivo QP + 1 (soma 1 ao QP do partido/federação), esse + 1 é só para evitar divisão por zero se o QP for zero (partidos/federações que ficaram entre 80% QE e 99% QE), mas se o QP for 1, fica 2 com a soma, e sucessivamente, isso não significa que fica com QP 2, continua com QP 1 e apenas soma 1 na conta. Não precisa arredondar, pode manter os decimais. Faça isso com todos os partidos/federações que podem participar da Sobra. Veja qual deles teve o maior resultado e confira qual é o candidato sobrando mais votado que recebeu pelo menos 20% QE, claro que não considera os que já entraram pelo QP na primeira parte. Se nenhum partido/federação tiver candidato sobrando com pelo menos 20% QE, será eleito o candidato sobrando com mais votos do partido/federação que ganhou a rodada. Isso vale para todas as rodadas. Veja a imagem abaixo.
                    <br /><br />
                    <div>
                        <img src="/sobra1.png" alt="eleito na primeira sobra" />
                    </div>
                    <br />
                    A partir da segunda rodada fica mais fácil, porque não precisa fazer o cálculo anterior de novo, guarde o resultado dos partidos/federações que perderam a rodada e faça o seguinte cálculo apenas com o partido/federação que ganhou: votos válidos do partido/federação dividido pelo seu respectivo QP + 1 + quantidade de vagas ganhas na Sobra, ou seja, se elegeu 1 na Sobra, então faça QP + 1 + 1, e assim sucessivamente em todas as rodadas, como nas imagens abaixo. Se eleger 2 na Sobra, será QP + 1 + 2, e assim vai. Na terceira rodada, se o mesmo partido/federação ganhou as duas primeiras, será QP + 1 + 2, e os outros continuam com o resultado da primeira, mas se um partido/federação ganhou a primeira rodada e outro ganhou a segunda, esses dois terão QP + 1 + 1, e os outros continuam com o resultado da primeira, e assim sucessivamente. Veja as imagens abaixo.
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
                    Nessa cidade, se houvesse mais uma rodada, PL ficaria em primeiro, mas não elegeria, porque não tem mais candidato com 20% QE, então passaria para REPUBLICANOS, que ainda tem candidato com 20% QE. Isso nos leva ao assunto dos "puxadores de voto".
                    <br /><br />
                    O que são os "puxadores de votos"? São candidatos que recebem muitos votos individualmente, por isso é melhor votar em algum candidato, não apenas na legenda, isso favorece o partido/federação a eleger na primeira fase, que é a fase do QP e dos 10% QE. Se o partido/federação passa no QP, com certeza também vai para a Sobra, desde que ainda tenha candidato com 20% QE. Portanto, o "puxador" não puxa ninguém de forma direta, não se esqueça que os candidatos precisam ter pelo menos 10% na primeira fase e 20% na Sobra, isso não é responsabilidade do "puxador", por isso é melhor votar em algum candidato, não apenas na legenda. Outra coisa, não há "puxada" nas Sobras, porque são rodadas independentes, cada rodada vale uma vaga, porém, como o partido/federação teve muitos votos, isso favorece, principalmente no primeiro cálculo, já no segundo, pode dificultar, porque aumenta 1 na divisão conforme o número de vagas ganhas, mas há partidos/federações que são competitivos no segundo cálculo mesmo se ganharem mais de uma vaga (nessa cidade, PL e REPUBLICANOS). E para encerrar, todos os partidos que elegeram nessa cidade são do centrão, mas isso é outro assunto, aproveite os cálculos, espero ter explicado bem.
                    <br /><br />
                    Para encerrar, duas curiosidades e mitos que ouvi por aí:<br />
                    1) existem dois tipos de voto nulo: o voto nulo básico, em que a pessoa vota em algum número que não corresponde a nenhum candidato ou partido, ou seja, vota 00 ou qualquer outra coisa, mas também pode ser erro ao digitar, além disso, imagina a pessoa que queria votar em alguém, mas digitou outro sem querer, isso não é nulo, é válido para o outro; e tem o voto nulo técnico, em que a pessoa votou em alguém, mas esse alguém estava sob júdice e não conseguiu resolver a situação, então seus votos são anulados.
                    <br />
                    2) ouvi dizer que o voto branco ajuda quem está ganhando (isso é falado para eleição de prefeito, governador e presidente), mas na verdade é o oposto, veja bem, se uma eleição tem 200 votos válidos sem brancos e nulos, e o candidato A tem 101 votos e o segundo tem 95, o candidato A ganha no primeiro turno por ter 50% + 1 dos votos válidos, mas se houver 10 votos brancos considerados válidos, o candidato A terá 101 de 210, isso é menos de 50% + 1, então vai para o segundo turno. Portanto, o voto branco ajuda quem está perdendo, não quem está ganhando. Essa ideia veio do tempo em que o voto branco era válido, porque o entendimento do judiciário eleitoral era que o voto branco significava que a pessoa aceitava qualquer candidato que ganhasse, mas isso mudou, e o voto branco passou a ser inválido, ou seja, é agora que ajuda quem está ganhando, porque há uma quantidade menor de votos válidos a considerar, conforme o exemplo que falei.
                </div>
                <div className={`${styles.parte_dois} ${styles['link-brazil']}`}>
                    <Link to={"/"}>Ir para a tela inicial</Link>
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
