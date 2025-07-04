// Função auxiliar para validação de entradas
function validarEntrada(mensagem) {
    const entrada = prompt(mensagem);
    if (entrada === null || entrada.trim() === '') {
        alert('Campo não pode ser vazio!');
        return null;
    }
    const numero = Number(entrada);
    if (isNaN(numero)) {
        alert('Favor digitar um número!');
        return null;
    }
    return numero;
}

// Função para adicionar o evento de click
function adicionarEventoBotao(idBotao, funcao) {
    document.getElementById(idBotao).addEventListener('click', funcao);
}

// Adicionando os eventos de clique
adicionarEventoBotao('botao-par-impar', calcularParImpar);
adicionarEventoBotao('botao-maior-menor', calcularMaiorMenor);
adicionarEventoBotao('botao-velocidade', verificarVelocidade);
adicionarEventoBotao('botao-salario', calcularAumento);
adicionarEventoBotao('botao-passagem', calcularPrecoPassagem);
adicionarEventoBotao('botao-ano', calcularAnoBissexto);
adicionarEventoBotao('botao-triangulo', verificarTriangulo);
adicionarEventoBotao('botao-equacao', calcularEquacao);

// Função Par ou Ímpar
function calcularParImpar() {
    const numero = validarEntrada('Digite um número: ');
    if (numero !== null) {
        alert(`O número ${numero} é ${numero % 2 === 0 ? 'par' : 'ímpar'}!`);
    }
}

// Função Maior ou Menor
function calcularMaiorMenor() {
    const listaNumeros = [];
    for (let i = 0; i < 3; i++) {
        const numero = validarEntrada(`Digite o ${i + 1}º número: `);
        if (numero === null) return; // Se algum número for inválido, interrompe a execução

        listaNumeros.push(numero);
    }

    // Verifica se todos os números são iguais
    const numerosIguais = listaNumeros.every(n => n === listaNumeros[0]);
    if (numerosIguais) {
        alert(`Os números são iguais: ${listaNumeros[0]}!!!`);
        return;
    }

    const maiorNumero = Math.max(...listaNumeros);
    const menorNumero = Math.min(...listaNumeros);
    alert(`Maior número: ${maiorNumero}, Menor número: ${menorNumero}`);
}

// Função para verificar a verificarVelocidade
function verificarVelocidade() {
    const verificarVelocidade = validarEntrada('Entre com a verificarVelocidade!');
    if (verificarVelocidade !== null) {
        if (verificarVelocidade < 0) {
            alert('O veículo não está em movimento!');
        } else if (verificarVelocidade <= 60) {
            alert('verificarVelocidade normal!');
        } else {
            alert('verificarVelocidade acima do permitido!');
        }
    }
}

// Função para calcular aumento salarial
function calcularAumento() {
    const salario = validarEntrada('Entre com o valor do salário: ');
    if (salario !== null) {
        if (salario <= 1000) {
            const salarioNovo = salario + (salario * 0.10);
            alert(`Salário antigo: R$${salario} => Novo Salário: R$${salarioNovo}`);
        } else if (salario > 1500) {
            const salarioNovo = salario + (salario * 0.05);
            alert(`Salário antigo: R$${salario} => Novo Salário: R$${salarioNovo}`);
        } else {
            alert(`Não houve reajuste Salarial: R$${salario}`);
        }
    }
}

//Função para Calcular Preço de Passagem
function calcularPrecoPassagem() {
    const km = validarEntrada('Entre com quilometragem: ');

    // Verificando se a quilometragem é negativa
    // Verificando se km é null ou negativo
    if (km === null || km < 0) {
        alert('Inserir um valor válido para quilometragem!');
        return;
    }

    let precoPassagem = 0.0;

    if (km >= 200) {
        precoPassagem = precoPassagem + (km * 0.7);  // Aumento de 70%
        alert(`Você pagará R$${precoPassagem} por km rodado!`);
    } else {
        precoPassagem = precoPassagem + (km * 0.4);  // Aumento de 40%
        alert(`Você pagará R$${precoPassagem} por km rodado!`);
    }

}

function calcularAnoBissexto() {
    const ano = validarEntrada('Entre com um ano válido: ');

    // Verificando se a quilometragem é negativa
    // Verificando se km é null ou negativo
    if (ano === null || ano < 0) {
        alert('Inserir um valor válido para quilometragem!');
        return;
    }

    if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
        alert(`O ano ${ano} é bissexto!`);
        return;
    } else {
        alert(`O ano ${ano} não é bissexto!`);
        return;
    }
}

function verificarTriangulo() {
    const a = validarEntrada('Entre com o valor de a: ');
    const b = validarEntrada('Entre com o valor de b: ');
    const c = validarEntrada('Entre com o valor de c: ');

    if (a === null || a < 0 || b === null || b < 0 || c === null || c < 0) {
        alert('Inserir um valor válido para as variáveis a, b e c!');
        return;
    }

    // Verificando se a quilometragem é negativa
    // Verificando se km é null ou negativo
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        alert('O valores inseridos FORMAM um triângulo!');
        return;
    }
    else {
        alert('O valores inseridos NÃO FORMAM um triângulo!');
        return;
    }
}

function calcularEquacao() {
    const a = validarEntrada('Entre com o valor de a: ');
    const b = validarEntrada('Entre com o valor de b: ');
    const c = validarEntrada('Entre com o valor de c: ');

    if (a === 0) {
        alert(`Não é uma equação do 2º grau!: a=${a}`);
    }

    const delta = Math.pow(b, 2) - 4 * a * c;
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    alert(`Raízes da equação: [${x1}, ${x2}]`);
}
