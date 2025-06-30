//Capturar evento de click
document.getElementById('botao-par-impar').addEventListener('click', function () {
    parImpar();
});

document.getElementById('botao-maior-menor').addEventListener('click', function () {
    maiorMenor();
});



function parImpar() {
    const entrada = prompt('Digite um número: ');

    if (entrada === null || entrada.trim() === '') {
        alert('É preciso digitar um número!');
        return;
    }

    // Casting
    const numero = Number(entrada);

    // Validação
    if (isNaN(numero)) {
        alert('Não é um número!');
        return;
    }

    //Testando
    if (numero % 2 === 0) {
        alert(`O número ${numero} é par!`)
    } else {
        alert(`O número ${numero} é ímpar!`)
    }
}

function maiorMenor() {
    //console.log('chegou aqui!')
    const listaNumeros = [];
    for (let i = 0; i < 3; i++) {
        const entrada = prompt(`Digite o ${i + 1}º número: `);

        //Validação
        if (entrada === null || entrada.trim() == '') {
            alert('Campo não pode ser vazio!');
            return;
        }

        // Casting
        const numero = Number(entrada)

        if (isNaN(numero)) {
            alert('Favor digitar um número!');
            return;
        }
        //Coloca o número na lista
        listaNumeros.push(numero);
    }

    //Verificar números iguais
    const numerosIguais = listaNumeros.every(n => n === listaNumeros[0]);

    if (numerosIguais) {
        alert(`Os números são iguais: ${listaNumeros[0]}!!!`);
        return;
    }

    //Encontrar o Maior e menor
    const maiorNumero = Math.max(...listaNumeros);
    const menorNumero = Math.min(...listaNumeros);

    alert(`Maior número: ${maiorNumero}, Menor número: ${menorNumero}`);
}


