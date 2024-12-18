// função de multiplicação
function multiplicacao(primeiroNumero: number, segundoNumero: number) : number{
    return primeiroNumero * segundoNumero;
}

// saudação
function saudacao(nome: string): string{
    return `Olá ${nome}`;
}
console.log(multiplicacao(9, 9));
console.log(saudacao('Bruna'));

// teste
const button = document.getElementById('btn');
button?.addEventListener('click', (ev: MouseEvent) => {
    const dizNome = saudacao('Bruna');
    alert(`Olá ${dizNome}`);
})