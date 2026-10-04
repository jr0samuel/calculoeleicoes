export function calcularQP(vvpc, qe) {
    if (vvpc === "" || isNaN(vvpc) || qe === "" || isNaN(qe) || Number(qe) === 0) return "";
    let conta = (vvpc / qe);
    if (!isFinite(conta) || isNaN(conta)) return "";
    return Math.floor(conta);
};
