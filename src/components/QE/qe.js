export function calcularQE(vve, vp) {
    if (vve === "" || vp === "") return "";
    let conta = vve / vp;
    if (!isFinite(conta) || isNaN(conta)) return "";
    let parteInteira = Math.floor(conta);
    let primeiroDecimal = Math.floor((conta * 10) + 1e-10) % 10;
    let resolucao = (primeiroDecimal <= 5) ? parteInteira : (parteInteira + 1);
    return resolucao;
};
