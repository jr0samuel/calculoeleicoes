export function calcularQE(vve, vp){
    let conta = (vve / vp);
    if (!isFinite(conta) || isNaN(conta) || vve === "" || vp === "") return "";
    let decimal = conta - Math.trunc(conta);
    let primeiroDecimal = Math.trunc(decimal * 10);
    return primeiroDecimal <= 5 ? Math.floor(conta) : Math.ceil(conta);
};
