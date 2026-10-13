import Decimal from "decimal.js";
import { numberTrouble } from "../../utils/troubleshooting.js";
export function calcularDezQe(dezQe) {
    let dezQeNT = numberTrouble(dezQe);
    if (dezQeNT === null || !isFinite(dezQeNT)) return "";
    const conta = new Decimal(dezQeNT).times(0.1).abs();
    if (!conta.isFinite() || conta.isNaN()) return "";
    return new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(conta.floor().toNumber());
};
export function calcularOitentaQe(oitentaQe) {
    let oitentaQeNT = numberTrouble(oitentaQe);
    if (oitentaQeNT === null || !isFinite(oitentaQeNT)) return "";
    const conta = new Decimal(oitentaQeNT).times(0.8).abs();
    if (!conta.isFinite() || conta.isNaN()) return "";
    return new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(conta.floor().toNumber());
};
export function calcularVinteQe(vinteQe) {
    let vinteQeNT = numberTrouble(vinteQe);
    if (vinteQeNT === null || !isFinite(vinteQeNT)) return "";
    const conta = new Decimal(vinteQeNT).times(0.2).abs();
    if (!conta.isFinite() || conta.isNaN()) return "";
    return new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(conta.floor().toNumber());
};
