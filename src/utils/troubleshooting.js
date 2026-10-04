export function numberTrouble(valor) {
    let texto = String(valor).trim();
    if (texto === "") return null;
    let numero = Number(texto.replace(",", "."));
    if (!Number.isFinite(numero)) return null;
    return numero;
};
