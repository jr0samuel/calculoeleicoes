export function numberTrouble(valor) {
    if (valor === null || valor === undefined) return null;
    let texto = String(valor).trim();
    if (texto === "") return null;
    texto = texto.replace(/[\s.,]/g, "");
    let numero = Number(texto);
    if (!Number.isFinite(numero)) return null;
    return numero;
};
