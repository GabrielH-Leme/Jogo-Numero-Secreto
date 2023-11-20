let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInciial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
};

exibirMensagemInciial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ?'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor que o chute.')
        } else{
            exibirTextoNaTela('p','O número secreto é maior que o chute.')
        }
        tentativas++;
        limparCampo();
    };
};
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElementosDaLista = listaDeNumeroSorteados.length;

    if(quantidadeDeElementosDaLista == numeroLimite){
        listaDeNumeroSorteados = [];
    }

    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
};
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
};

function reinicarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInciial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
};



// desafios aula 2.

// function exibirOlaConsole(){
//     console.log('Ola, mundo!');
// }
// exibirOlaConsole();

// function exibirOlaConsole(nome){
//     console.log(`Olá, ${nome}`)
// };

// exibirOlaConsole('Azul');
// function calcularDobro(numero) {
//     return numero * 2;
//   }
  
//   let resultadoDobro = calcularDobro(5);
//   console.log(resultadoDobro);

// function calculoMedia(a,b,c){
//     return (a + b +c)/3;
// }
// let resultadoMedia = calculoMedia(4,4,4);
// console.log(resultadoMedia);

// function maiorEntreEles(a,b){
//     if(a>b){
//         return a;
//     }else {
//         return b;
//     }
// }

// let oMaior = maiorEntreEles(0,30);
// console.log(oMaior);

// function aoQuadrado (numero){
//     return numero * numero
// }
// let resultadoQuadrado = aoQuadrado(16);
// console.log(resultadoQuadrado);

//desafios aula 3

// function indiceMassaCorporal(altura,peso){
//     let indice = peso / (altura * altura) ;
//     return indice
// }

// console.log(indiceMassaCorporal(1.80, 80));



// function fatorial(numero) {
//     let num = 1;
//     for (let i = numero; i > 1; i--) {
//         num *= i;
//     }
//     return num;
// }
// console.log(fatorial(9));

// function conversorDolar(real){
//     return real * 4.80;
// }
// console.log(conversorDolar(10));

// function dimensoesSala(altura, largura){
//     let area = altura * largura;
//     let perimetro = (altura + largura)*2;
    
//     let campo = document.querySelector('h1');
//         campo.innerHTML = `A area da sala é: ${area} metros quadrados.`;
//     let campo1 = document.querySelector('p');
//         campo1.innerHTML = `O perímetro da sala é: ${perimetro} metros`;
// }
// dimensoesSala(5, 10);

// function dimensoesSalaCircular(raio){
//     let area = (raio*raio)*3.14;
//     let perimetro = raio* (3.14*2);

//     let campo = document.querySelector('h1');
//         campo.innerHTML = `A area da sala é: ${area} metros quadrados.`;
//     let campo1 = document.querySelector('p');
//         campo1.innerHTML = `O perímetro da sala é: ${perimetro.toFixed(2)} metros`;

// }
// dimensoesSalaCircular(5);

// function tabuada(numero){
//     let resultadoTabuada
//     for(let i = 1; i<=10; i++){
//         resultadoTabuada = numero*i;
//             let campo = document.querySelector('p');
//             let mensagemTabuada = ` ${numero} x ${i} = ${resultadoTabuada}|`
//             campo.innerHTML += mensagemTabuada
//         }
    
// }
// tabuada(135);

//desafios aula 4

// let listaGeneria = [];
// let linguagensDeProgramacao = ['JavaScrept', 'C', 'C++','Kotlin', 'Python'];

// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang')
// console.log(linguagensDeProgramacao);

// let listaNome = ['Gabriel', 'Claudionildo', 'Rubervina']
// console.log(listaNome[2]);