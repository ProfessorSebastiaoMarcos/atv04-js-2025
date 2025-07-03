//Capturar evento de click
document.getElementById('botao-par-impar').addEventListener('click', function () {
    parImpar();
});

document.getElementById('botao-maior-menor').addEventListener('click', function () {
    maiorMenor();
});

document.getElementById('botao-velocidade').addEventListener('click', function () {
    velocidade();
});

document.getElementById('botao-salario').addEventListener('click', function () {
    calcularAumento();
});

function parImpar() {
    const entrada = prompt('Digite um número: ');

    //IFs Separados
    if (entrada === null) {
        alert('É preciso digitar um número!');
        return;
    }

    const numero = Number(entrada);

    if (isNaN(numero)) {
        alert('Não é um número!');
        return;
    }

    if (numero % 2 === 0) {
        alert(`O número ${numero} é par!`)
    } else {
        alert(`O número ${numero} é ímpar!`)
    }
}

function maiorMenor() {
    const listaNumeros = [];
    for (let i = 0; i < 3; i++) {
        const entrada = prompt(`Digite o ${i + 1}º número: `);

        if (entrada === null || entrada.trim() === '') {
            alert('Campo não pode ser vazio!');
            return;
        }

        const numero = Number(entrada)

        if (isNaN(numero)) {
            alert('Favor digitar um número!');
            return;
        }
        //Coloca o número na lista
        listaNumeros.push(numero);
    }

    //Isso é uma arrow function que 
    // verifica se cada elemento da lista (n) é igual ao 
    // primeiro elemento da lista (listaNumeros[0]).
    const numerosIguais = listaNumeros.every(n => n === listaNumeros[0]);

    if (numerosIguais) {
        alert(`Os números são iguais: ${listaNumeros[0]}!!!`);
        return;
    }

    const maiorNumero = Math.max(...listaNumeros);
    const menorNumero = Math.min(...listaNumeros);

    alert(`Maior número: ${maiorNumero}, Menor número: ${menorNumero}`);
}

function velocidade() {
    const entrada = prompt('Entre com a velocidade!');
    const velocidade = Number(entrada);

    //IFs aninhados
    if (entrada === null || entrada.trim() === '') {
        alert('Campo não pode ser vazio!');
        return;
    } else if (isNaN(velocidade)) {
        alert('Favor digitar um número!');
        return;
    } else if (velocidade < 0) {
        alert('O veículonão está em movimento!');
        return;
    }

    if (velocidade <= 60) {
        alert('Velocidade normal!');
    } else {
        alert('Valocidade acima do permitido!')
    }
}

function calcularAumento() {
    const entrada = prompt('Entre com o valor do salário: ')
    const salario = parseFloat(entrada)

    if (entrada === null || entrada.trim() === '') {
        alert('Campo não pode ser vazio!');
        return;
    } else if (isNaN(salario)) {
        alert('Favor digitar um número!');
        return;
    } else if (salario <= 1000) {
        const salarioNovo = salario + (salario *.10)        
        alert(`Salário antigo: R$${salario} => Novo Salário: R$${salarioNovo}`);
        return;
    } else if (salario > 1500) {
        const salarioNovo = salario + (salario *.05)        
        alert(`Salário antigo: R$${salario} => Novo Salário: R$${salarioNovo}`);
        return;
    } else {
        alert(`Não houve reajuste Salarial: R$${salario}`);
    }
}