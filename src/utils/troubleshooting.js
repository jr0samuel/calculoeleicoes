export function numberTrouble(valor) {
    let texto = valor.trim();
    if (texto === "") return null;
    let numero = Number(texto.replace(",", "."));
    if (!Number.isFinite(numero)) return null;
    return numero;
};
