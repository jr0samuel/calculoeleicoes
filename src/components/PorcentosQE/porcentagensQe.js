export function calcularDezQe(dezQe) {
    if (dezQe === "" || isNaN(dezQe)) return "";
    let conta = (dezQe * 0.1);
    if (!isFinite(conta) || isNaN(conta)) return "";
    return Math.floor(conta);
};
export function calcularOitentaQe(oitentaQe) {
    if (oitentaQe === "" || isNaN(oitentaQe)) return "";
    let conta = (oitentaQe * 0.8);
    if (!isFinite(conta) || isNaN(conta)) return "";
    return Math.floor(conta);
};
export function calcularVinteQe(vinteQe) {
    if (vinteQe === "" || isNaN(vinteQe)) return "";
    let conta = (vinteQe * 0.2);
    if (!isFinite(conta) || isNaN(conta)) return "";
    return Math.floor(conta);
};
