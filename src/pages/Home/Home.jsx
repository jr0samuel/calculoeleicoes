import { useEffect } from "react";
import { alterarHead } from "../../utils/favicon.js";
import styles from './Home.module.css';
import { Qe } from "../../components/QE/Qe.jsx";
import { Qp } from "../../components/QP/Qp.jsx";
import { QeDez } from "../../components/PorcentosQE/QeDez.jsx";
import { QeOitenta } from "../../components/PorcentosQE/QeOitenta.jsx";
import { QeVinte } from "../../components/PorcentosQE/QeVinte.jsx";
import { SobraInicial } from "../../components/SobraInicial/SobraInicial.jsx";
import { SobraX } from "../../components/SobraX/SobraX.jsx";

export default function Home(){
    useEffect(() => {
        alterarHead('/icone-urna.jpg', 'Cálculo da Eleição');
    }, []);

    return(
        <main className={styles.principal}>
            <section className={styles.secao_um}>
                <h2 className={styles.titulo}>Cálculos das Eleições para Vereadores e Deputados Estaduais e Federais</h2>
            </section>
            <section className={styles.secao_dois}>
                <Qe />
                <Qp />
                <QeDez />
                <h3>Após os cálculos anteriores, começam as rodadas do Cálculo da Sobra</h3><br/><hr/><br/>
                <QeOitenta />
                <SobraInicial />
                <QeVinte />
                <SobraX />
            </section>
            <section className={styles.secao_tres}>
                <a className={styles.secao_tres_link} href="/explica" target="_blank" rel="noreferrer">
                    Clique para ver a explicação dos cálculos
                </a>
            </section>
        </main>
    );
};
