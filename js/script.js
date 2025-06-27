document.getElementById('botao-exa').addEventListener('click', function () {
    parImpar()
});

function parImpar() {
        const entrada = prompt('Digite um número: ');

        if (entrada === null || entrada.trim() === '') {
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
            alert('O número é Ímpar!')
        }
    }

    function maiorMenor(){
        
    }