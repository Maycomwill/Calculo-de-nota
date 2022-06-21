const inputs = document.querySelectorAll('.inputNotas');
const button = document.querySelector('.mediaButton');
const resultText = document.getElementsByClassName('resultText')[0];
const resultBgColor = document.getElementsByClassName('card-resultado')

var notas = [{nome: 'nota1', value: 0}, {nome: 'nota2', value:0 }];
var notasNumber = [];


const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {

    if (target.value == ""){
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }

}

const handleChange = () => {
    const [nota1, nota2] = inputs;

    if (nota1.value | nota2.value === '0' ) {
        button.setAttribute('disabled', '');
    } else (nota1.value | nota2.value != '0')
        button.removeAttribute('disabled');
    }

const agregandoValor = (event) => {
    const value_input = event.target.value;
    const name_input = event.path[0].name

    notas = notas.map(item_notas => {
        let objectMap = {nome: '""', value: 0}
        
        if (item_notas.nome === name_input){
            objectMap.nome = name_input;
            objectMap.value = value_input;
            return objectMap
        };
        
        return item_notas
 
    })
  
}

    function calcular(){

        
        var soma = 0;
        var media = 0;
            
        for (var i = 0; i < notas.length; i++) {

            var nota = parseFloat(notas[i].value);

            soma = soma + nota;
                
        }
              media = soma/notas.length;
              console.log(media); 
            
        if (media >= 7){
            
            resultText.innerHTML = `A média foi de ${media} e o aluno foi aprovado`;
            console.log(resultText)

        } else {

            resultText.innerHTML = `A média foi de ${media} e o aluno não foi aprovado`;

        }
    };


inputs.forEach((inputNotas)=>inputNotas.addEventListener('focus', handleFocus));
inputs.forEach((inputNotas)=>inputNotas.addEventListener('focusout', handleFocusOut));
inputs.forEach((inputNotas)=>inputNotas.addEventListener('input', handleChange));
inputs.forEach((inputNotas)=>inputNotas.addEventListener('input', agregandoValor));
button.onclick = calcular;

