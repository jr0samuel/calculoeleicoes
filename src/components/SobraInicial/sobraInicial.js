import { numberTrouble } from "../../utils/troubleshooting.js";
import Decimal from "decimal.js";
export function calcularSobraInicial(siVvPc, siQpPc) {
    let soinVvPc = numberTrouble(siVvPc);
    let soinQpPc = numberTrouble(siQpPc);
    if (soinVvPc === null || !isFinite(soinVvPc) || soinQpPc === null || !isFinite(soinQpPc)) return "";
    const conta = new Decimal(soinVvPc).dividedBy(new Decimal(soinQpPc + 1)).abs();
    if (!conta.isFinite() || conta.isNaN()) return "";
    return new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
    }).format(conta.toNumber());
};
