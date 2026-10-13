import { numberTrouble } from "../../utils/troubleshooting.js";
import Decimal from "decimal.js";
export function calcularSobraX(sxVvPc, sxQpPc, sxVsPc) {
    let soxVvPc = numberTrouble(sxVvPc);
    let soxQpPc = numberTrouble(sxQpPc);
    let soxVsPc = numberTrouble(sxVsPc);
    if (soxVvPc === null || !isFinite(soxVvPc) || soxQpPc === null || !isFinite(soxQpPc) || soxVsPc === null || !isFinite(soxVsPc) || soxVsPc < 1) return "";
    const conta = new Decimal(soxVvPc).dividedBy(new Decimal(soxQpPc + 1 + soxVsPc)).abs();
    if (!conta.isFinite() || conta.isNaN()) return "";
    return new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
    }).format(conta.toNumber());
};
