
// ========== VARIÁVEIS ==========
var usd = null; //Dólar
var eur = null; //Euro
var gbp = null; //Libra

// ========== CONSULTA API QUANDO O DOCUMENTO ESTIVER CARREGADO ==========
document.addEventListener('DOMContentLoaded', () => {
    var url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL' //URL da API
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            usd = data.USDBRL.bid; //Armazena o valor do dólar
            eur = data.EURBRL.bid; //Armazena o valor do euro
            gbp = data.GBPBRL.bid; //Armazena o valor da libra
            
        })
})


    var button = document.querySelector('#btn');
    var div = document.querySelector('.conversor-div');
    var erro = document.querySelector('.erro');
    var real = document.querySelector('#real')
    
    button.addEventListener('click', gerar);
    real.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            gerar();
           }
    });


    function gerar(){
        real = document.querySelector('#real').value;
        // console.log(real)
        // console.log(real/usd)

        if(!real || real == 0 || real < 0){
            erro.style.display = 'flex';
            div.style.display = 'none';

            // erro.style.animation = '';
            // setTimeout(() => erro.style.animation = 'shake .8s ease-in', 5);

            erro.innerHTML = 'Informe um valor válido para conversão!'

        }else{
            converter(real)
            div.style.display = 'flex';
            erro.style.display = 'none';
            
        }
    }


    function converter(real){
        var restDolar = document.querySelector('#dolar h3');
        var restEuro = document.querySelector('#euro h3');
        var restLibra = document.querySelector('#libra h3');

        restDolar.innerHTML = `U$${(real / usd).toFixed(2)}`
        restEuro.innerHTML = `€${(real / eur).toFixed(2)}`
        restLibra.innerHTML = `£${(real / gbp).toFixed(2)}`

    }

