const enviar = document.querySelector('.submit')
const email = document.querySelector('.campo')
const validacao = document.querySelector('.records')

enviar.addEventListener('click', () => {
    if(email.value === ''){
        validacao.classList.add('invalido')
    } else {
        validacao.classList.remove('invalido')
    }
})