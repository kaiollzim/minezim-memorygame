const input = document.querySelector('.login__input')
const button = document.querySelector('.login__button')
const form = document.querySelector('.login-form')

const keyboardAudio = document.querySelector('#keyboard');
keyboardAudio.volume = 0.2;


const validadeInput = ({ target }) => {

    keyboardAudio.play();

    if (target.value.length > 25) {
        button.setAttribute('disabled', '')
        return
    }

    if (target.value.length > 2) {
        button.removeAttribute('disabled')
        return
    }


    button.setAttribute('disabled', '')
}

const handleSubmit = (event) => {

    event.preventDefault();

    localStorage.setItem('player', input.value)
    window.location = 'pages/game.html'
}

function changeDonate() {
    window.location = 'pages/game.html'
}

input.addEventListener('input', validadeInput)
form.addEventListener('submit', handleSubmit)