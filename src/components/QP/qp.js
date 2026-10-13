import Decimal from "decimal.js";
import { numberTrouble } from "../../utils/troubleshooting.js";
export function calcularQP(vvpc, qe) {
    let vvpcNT = numberTrouble(vvpc);
    let qeNT = numberTrouble(qe);
    if (vvpcNT === null || !isFinite(vvpcNT) || qeNT === null || !isFinite(qeNT) || Number(qeNT) === 0) return "";
    let conta = new Decimal(vvpcNT).dividedBy(new Decimal(qeNT)).abs();
    if (!conta.isFinite() || conta.isNaN()) return "";
    return conta.floor().toNumber();
};
