import Decimal from "decimal.js";
export function calcularDezQe(dezQe) {
    if (dezQe === "" || isNaN(dezQe) || !isFinite(Number(dezQe))) return "";
    const conta = new Decimal(dezQe).times(0.1).abs();
    if (!conta.isFinite() || conta.isNaN()) return "";
    return conta.floor().toNumber();
};
export function calcularOitentaQe(oitentaQe) {
    if (oitentaQe === "" || isNaN(oitentaQe) || !isFinite(Number(oitentaQe))) return "";
    const conta = new Decimal(oitentaQe).times(0.8).abs();
    if (!conta.isFinite() || conta.isNaN()) return "";
    return conta.floor().toNumber();
};
export function calcularVinteQe(vinteQe) {
    if (vinteQe === "" || isNaN(vinteQe) || !isFinite(Number(vinteQe))) return "";
    const conta = new Decimal(vinteQe).times(0.2).abs();
    if (!conta.isFinite() || conta.isNaN()) return "";
    return conta.floor().toNumber();
};
