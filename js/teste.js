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
adicionarEventoBotao('botao-par-impar', parImpar);
adicionarEventoBotao('botao-maior-menor', maiorMenor);
adicionarEventoBotao('botao-velocidade', velocidade);
adicionarEventoBotao('botao-salario', calcularAumento);

// Função Par ou Ímpar
function parImpar() {
    const numero = validarEntrada('Digite um número: ');
    if (numero !== null) {
        alert(`O número ${numero} é ${numero % 2 === 0 ? 'par' : 'ímpar'}!`);
    }
}

// Função Maior ou Menor
function maiorMenor() {
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

// Função para verificar a velocidade
function velocidade() {
    const velocidade = validarEntrada('Entre com a velocidade!');
    if (velocidade !== null) {
        if (velocidade < 0) {
            alert('O veículo não está em movimento!');
        } else if (velocidade <= 60) {
            alert('Velocidade normal!');
        } else {
            alert('Velocidade acima do permitido!');
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