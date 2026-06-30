export function calcularQE(vve, vp){
    let conta = vve / vp;
    let parteInteira = Math.floor(conta);
    let primeiroDecimal = Math.floor((conta * 10) + 1e-10) % 10;
    let resolucao = (primeiroDecimal <= 5) ? parteInteira : (parteInteira + 1);
    return resolucao;
};
