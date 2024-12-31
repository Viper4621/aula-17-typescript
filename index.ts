let numero = 20; //inferencia de tipo quando declarado direto um valor ele entende que é number

const pi = 3.1415;

let nome: string = "erick";

let correta: boolean;

let resultado = numero * pi;

// const nomeDoUsuario = prompt('Qual é o seu nome?');

// console.log(nomeDoUsuario?.toUpperCase());

const numeros: number[] = [1, 2, 3, 4, 5]; //versão nova mais usada
const numerosGeneric: Array<number> = [1, 2, 3, 4, 5]; //versão antiga

//  const misto: (number | string )[] = ['erick', 36, 1.76]//não é boa pratica mas podemos dar tipagem no array de ou number ou string union type
// const misto: any[] = ['erick', 36, {},()=> {}, true] //Evite sempre de fazer isso não fazer

const idades: number[] = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);

const menorDeIdade = idades.filter((idade) => idade < 18); //inferencia de tipos o ts já entende e sabe o type

console.log(menorDeIdade);

//tupla é quando sabemos que sempre vai ter 2 valores dentro de um array // abaixo forma de tipar uma tupla
//podia ser [string,string] ou [number,string] ou mais de 2 que siga sempre a mesma estrutura
const pessoaTupla: [string, number] = ["erick", 36];

//typagem de objetos
//abaixo exemplo de objeto o ts já faz a typagem
//object types

// interface só existe em typescript atravez dele pode criar a modelagem e parece um objeto
//valor sempre
//interface é o nome que damos para modelagem de uma class e associamos a objetos orientação a objetos

interface Person {
  nome: string;
  idade: number;
  profissao?: string;
  altura: number;
}
//como criamos a modelagem assima podemos atribuir essa interface ao modelo abaixo
//é ideal fazer isso pois se caso alguem ou nos mesmos tirar algo dessa estrutura o proprio ts vai sugerir o que falta
//caso desejarmos algum parametro opcional podemos colocar ? no parametro
const pessoa: Person = {
  nome: "erick",
  idade: 27,
  profissao: "desenvolvedor",
  altura: 1.76,
};
// caso colocar abaixo pessoa. ele sugere os atributos do objeto

const pessoa2: Person = {
  nome: "outra pessoa",
  idade: 46,
  altura: 1.57,
};

pessoa2.profissao = "Sei la";

//type é um tipo abstrato de qualquer coisa

type PersonType = {
  nome: string;
  idade: number;
  altura: number;
  profissao?: string;
};

// union type unir tipos e literal types exemplo criterio tipo literal como colocamos greater ou lower tem que ser um dos dos

//type aliases =  abaixo estamos dando apelido para um tipo e podemos usar depois dentro do codigo
//abaixo é um parametro opcional então sempre colocar no final para não dar erros
type Criterio = "greater" | "lower";

function chooseNumber(
  numero1: number,
  numero2: number,
  criterio?: Criterio
  //tipagem de função apos a função determinamos a tipagem como só estamos trabalhamos com numeros colocamos number
): number {
  switch (criterio) {
    case "greater":
      return numero1 > numero2 ? numero1 : numero2;
    case "lower":
      return numero1 < numero2 ? numero1 : numero2;
    default:
      const numeroAleatorio = Math.random();

      if (numeroAleatorio >= 0.5) return numero1;
      return numero2;
  }
}
// com criterio só ira mostrar o greater isso é union com literal types
const numeroEscolhido = chooseNumber(10, 20, "greater");
console.log("numeroEscolhido:", numeroEscolhido);

//quando função não retornar nada podemos colocar void na tipagem ou seja vazio
//sempre cuidado com tipo any
function somar(num1:number, num2:number): number{
    return num1+num2
}

//utility types:
//ideia e de criar novos tipos a partir de tipos ja existentes
//partial / required / pick / omit / exclude / record
//partial palavra reservada de ts isso abaixo é um parcial de alguma coisa
// caso abaixo todos os parametros são opcionais do Person que criamos se der ctrl barra de espaço dentro da const ela mostra os parametros
type PersonPartial = Partial<Person>;

const novaPessoa: PersonPartial = {
 
}

//type required abaixo todos os parametros do person vão ser obrigatorios mesmo se algum 


type PersonRequired = Required<Person>;

//pick serve para pegar parametros especificos de um person

type PersonPicked = Pick<Person, 'nome' | 'idade'>


//type omit = omitir esconder
// quando colocar mouse no tipe ele tira o profissao isso omite parametros
type PersonOmit = Omit<Person, 'profissao'>

//exclude
// como criamos nosso criterio podemos excluir alguma dos 2 criterios do nosso union type
type  CriterioExclude = Exclude<Criterio, 'greater'>

//record vai criar uma tipo objeto onde a chave e o tipo que colocar e o segundo objeto
//exemplo string  person

type Pessoas = Record<string, Person>
// com isso  criamos um type de pessoas gravando cuja chave e uma string e um objeto que segue uma estrutura de uma person
const pessoas: Pessoas = {
    '333.222.143.70':{
        nome:'fulano',
        idade:36,
        altura:1.80,
    },
    '333.222.143.0':{
        nome:'fulano',
        idade:36,
        altura:1.80,
    }
}