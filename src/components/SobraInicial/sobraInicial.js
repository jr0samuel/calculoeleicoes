import { numberTrouble } from "../../utils/troubleshooting.js";

export function calcularSobraInicial(siVvPc, siQpPc) {
    let soinVvPc = numberTrouble(siVvPc);
    let soinQpPc = numberTrouble(siQpPc);
    if (soinVvPc === null || soinQpPc === null) return "";
    let conta = (soinVvPc / (soinQpPc + 1));
    if (!isFinite(conta) || isNaN(conta) || soinVvPc === "" || soinQpPc === "") return "";
    return conta;
};
