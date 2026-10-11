import { numberTrouble } from "../../utils/troubleshooting.js";
import Decimal from "decimal.js";
export function calcularSobraX(sxVvPc, sxQpPc, sxVsPc) {
    if (sxVvPc === "" || isNaN(sxVvPc) || !isFinite(Number(sxVvPc)) || sxQpPc === "" || isNaN(sxQpPc) || !isFinite(Number(sxQpPc)) || sxVsPc === "" || isNaN(sxVsPc) || !isFinite(Number(sxVsPc)) || Number(sxVsPc) < 1) return "";
    let soxVvPc = numberTrouble(sxVvPc);
    let soxQpPc = numberTrouble(sxQpPc);
    let soxVsPc = numberTrouble(sxVsPc);
    if (soxVvPc === null || soxQpPc === null || soxVsPc === null) return "";
    const conta = new Decimal(soxVvPc).dividedBy(new Decimal(soxQpPc + 1 + soxVsPc)).abs();
    if (!conta.isFinite() || conta.isNaN()) return "";
    return conta;
};
