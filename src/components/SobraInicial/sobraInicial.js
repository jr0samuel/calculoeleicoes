import { numberTrouble } from "../../utils/troubleshooting.js";
import Decimal from "decimal.js";
export function calcularSobraInicial(siVvPc, siQpPc) {
    if (siVvPc === "" || isNaN(siVvPc) || !isFinite(Number(siVvPc)) || siQpPc === "" || isNaN(siQpPc) || !isFinite(Number(siQpPc))) return "";
    let soinVvPc = numberTrouble(siVvPc);
    let soinQpPc = numberTrouble(siQpPc);
    if (soinVvPc === null || soinQpPc === null) return "";
    const conta = new Decimal(soinVvPc).dividedBy(new Decimal(soinQpPc + 1)).abs();
    if (!conta.isFinite() || conta.isNaN()) return "";
    return conta;
};
