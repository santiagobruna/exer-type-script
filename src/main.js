"use strict";
// função de multiplicação
function multiplicacao(primeiroNumero, segundoNumero) {
    return primeiroNumero * segundoNumero;
}
// saudação
function saudacao(nome) {
    return `Olá ${nome}`;
}
console.log(multiplicacao(9, 9));
console.log(saudacao('Bruna'));
// teste
const button = document.getElementById('btn');
button === null || button === void 0 ? void 0 : button.addEventListener('click', (ev) => {
    const dizNome = saudacao('Bruna');
    alert(`${dizNome}`);
});
