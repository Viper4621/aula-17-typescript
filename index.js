var numero = 20; //inferencia de tipo quando declarado direto um valor ele entende que é number
var pi = 3.1415;
var nome = "erick";
var correta;
var resultado = numero * pi;
// const nomeDoUsuario = prompt('Qual é o seu nome?');
// console.log(nomeDoUsuario?.toUpperCase());
var numeros = [1, 2, 3, 4, 5]; //versão nova mais usada
var numerosGeneric = [1, 2, 3, 4, 5]; //versão antiga
//  const misto: (number | string )[] = ['erick', 36, 1.76]//não é boa pratica mas podemos dar tipagem no array de ou number ou string union type
// const misto: any[] = ['erick', 36, {},()=> {}, true] //Evite sempre de fazer isso não fazer
var idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
var menorDeIdade = idades.filter(function (idade) { return idade < 18; }); //inferencia de tipos o ts já entende e sabe o type
console.log(menorDeIdade);
//tupla é quando sabemos que sempre vai ter 2 valores dentro de um array // abaixo forma de tipar uma tupla
//podia ser [string,string] ou [number,string] ou mais de 2 que siga sempre a mesma estrutura
var pessoaTupla = ["erick", 36];
//como criamos a modelagem assima podemos atribuir essa interface ao modelo abaixo
//é ideal fazer isso pois se caso alguem ou nos mesmos tirar algo dessa estrutura o proprio ts vai sugerir o que falta
//caso desejarmos algum parametro opcional podemos colocar ? no parametro
var pessoa = {
    nome: "erick",
    idade: 27,
    profissao: "desenvolvedor",
    altura: 1.76,
};
// caso colocar abaixo pessoa. ele sugere os atributos do objeto
var pessoa2 = {
    nome: "outra pessoa",
    idade: 46,
    altura: 1.57,
};
pessoa2.profissao = "Sei la";
function chooseNumber(numero1, numero2, criterio
//tipagem de função apos a função determinamos a tipagem como só estamos trabalhamos com numeros colocamos number
) {
    switch (criterio) {
        case "greater":
            return numero1 > numero2 ? numero1 : numero2;
        case "lower":
            return numero1 < numero2 ? numero1 : numero2;
        default:
            var numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return numero1;
            return numero2;
    }
}
// com criterio só ira mostrar o greater isso é union com literal types
var numeroEscolhido = chooseNumber(10, 20, "greater");
console.log("numeroEscolhido:", numeroEscolhido);
//quando função não retornar nada podemos colocar void na tipagem ou seja vazio
//sempre cuidado com tipo any
function somar(num1, num2) {
    return num1 + num2;
}
var novaPessoa = {};
// com isso  criamos um type de pessoas gravando cuja chave e uma string e um objeto que segue uma estrutura de uma person
var pessoas = {
    '333.222.143.70': {
        nome: 'fulano',
        idade: 36,
        altura: 1.80,
    },
    '333.222.143.0': {
        nome: 'fulano',
        idade: 36,
        altura: 1.80,
    }
};
