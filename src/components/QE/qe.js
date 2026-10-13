import Decimal from "decimal.js";
import { numberTrouble } from "../../utils/troubleshooting.js";
export function calcularQE(vve, vp) {
    let vveNT = numberTrouble(vve);
    let vpNT = numberTrouble(vp);
    if (vveNT === null || !isFinite(vveNT) || vpNT === null || !isFinite(vpNT) || Number(vpNT) === 0) return "";
    const valor1 = new Decimal(vveNT);
    const valor2 = new Decimal(vpNT);
    const conta = valor1.dividedBy(valor2).abs();
    if (!conta.isFinite() || conta.isNaN()) return "";
    const parteInteira = conta.trunc().toNumber();
    const primeiroDecimal = conta.times(10).mod(10).trunc().toNumber();
    if (primeiroDecimal <= 5) {
        return new Intl.NumberFormat("pt-BR", {
            maximumFractionDigits: 0
        }).format(parteInteira);
    } else {
        return new Intl.NumberFormat("pt-BR", {
            maximumFractionDigits: 0
        }).format(parteInteira + 1);
    }
};
