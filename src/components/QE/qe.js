export function calcularQE(vve, vp) {
    if (vve === "" || isNaN(vve) || vp === "" || isNaN(vp) || Number(vp) == 0) return "";
    let conta = vve / vp;
    let contaAbsoluta = Math.abs(conta);
    let contaLimpa = contaAbsoluta.toFixed(14);
    let [strInteiro, strDecimal] = contaLimpa.split(".");
    let parteInteira = Number(strInteiro);
    let primeiroDecimal = Number(strDecimal[0]);
    if (primeiroDecimal <= 5) {
        return parteInteira;
    } else {
        return parteInteira + 1;
    }
};
