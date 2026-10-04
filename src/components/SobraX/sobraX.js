import { numberTrouble } from "../../utils/troubleshooting.js";

export function calcularSobraX(sxVvPc, sxQpPc, sxVsPc) {
    if (sxVvPc === "" || isNaN(sxVvPc) || sxQpPc === "" || isNaN(sxQpPc) || sxVsPc === "" || isNaN(sxVsPc) || sxVsPc < 1) return "";
    let soxVvPc = numberTrouble(sxVvPc);
    let soxQpPc = numberTrouble(sxQpPc);
    let soxVsPc = numberTrouble(sxVsPc);
    if (soxVvPc === null || soxQpPc === null || soxVsPc === null) return "";
    let conta = (soxVvPc / (soxQpPc + 1 + soxVsPc));
    if (!isFinite(conta) || isNaN(conta)) return "";
    return conta;
};
