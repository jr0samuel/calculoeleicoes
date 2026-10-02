import Decimal from "decimal.js";
export function calcularQE(vve, vp) {
    if (vve === "" || isNaN(vve) || vp === "" || isNaN(vp) || Number(vp) == 0) return "";
    const valor1 = new Decimal(vve);
    const valor2 = new Decimal(vp);
    const conta = valor1.dividedBy(valor2);
    const parteInteira = conta.trunc().toNumber();
    const primeiroDecimal = Math.abs(conta.times(10).mod(10).trunc().toNumber());
    if (primeiroDecimal <= 5) {
        return parteInteira;
    } else {
        return parteInteira + 1;
    }
};
