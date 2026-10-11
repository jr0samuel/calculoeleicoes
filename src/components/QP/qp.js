import Decimal from "decimal.js";
export function calcularQP(vvpc, qe) {
    if (vvpc === "" || isNaN(vvpc) || !isFinite(Number(vvpc)) || qe === "" || isNaN(qe) || !isFinite(Number(qe)) || Number(qe) === 0) return "";
    let conta = new Decimal(vvpc).dividedBy(new Decimal(qe)).abs();
    if (!conta.isFinite() || conta.isNaN()) return "";
    return conta.floor().toNumber();
};
