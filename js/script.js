document.getElementById('botao-par-impar').addEventListener('click', function () {
    parImpar()
});

document.getElementById('botao-maior-menor').addEventListener('click', function () {
    maiorMenor()
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
            alert('O número é Ímpar!')
        }
    }

    function maiorMenor(){
        
    }