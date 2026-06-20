export function calcularDezQe(dezQe) {
    let conta = (dezQe * 0.1);
    if (!isFinite(conta) || isNaN(conta) || dezQe === "") return "";
    return Math.floor(conta);
};
export function calcularOitentaQe(oitentaQe) {
    let conta = (oitentaQe * 0.8);
    if (!isFinite(conta) || isNaN(conta) || oitentaQe === "") return "";
    return Math.floor(conta);
};
export function calcularVinteQe(vinteQe) {
    let conta = (vinteQe * 0.2);
    if (!isFinite(conta) || isNaN(conta) || vinteQe === "") return "";
    return Math.floor(conta);
};
