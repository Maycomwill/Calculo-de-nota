const inputs = document.querySelectorAll('.inputNotas');
const button = document.querySelector('.mediaButton')

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

    if (nota1.value && nota2.value <= 0 ) {
        button.setAttribute('disabled', '');
    } else {
        button.removeAttribute('disabled');
    }

}

inputs.forEach((inputNotas)=>inputNotas.addEventListener('focus', handleFocus));
inputs.forEach((inputNotas)=>inputNotas.addEventListener('focusout', handleFocusOut));
inputs.forEach((inputNotas)=>inputNotas.addEventListener('input', handleChange));