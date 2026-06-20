export function calcularQP(vvpc, qe) {
    let conta = (vvpc / qe);
    if (!isFinite(conta) || isNaN(conta) || vvpc === "" || qe === "") return "";
    return Math.floor(conta);
};
