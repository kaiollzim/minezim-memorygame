const donate = document.querySelector('.donate__button');
const rank = document.querySelector('.rank__button');
const qrCode = document.querySelector('.qrcode');
const qrText = document.querySelector('.qr-text');

const audioClick = document.querySelector('#mouseClick');
const keyboard = document.querySelector('#keyboard');

audioClick.volume = 0.2;

const typeText = (textDiv) => {

    const textArray = textDiv.innerHTML.split("");
    textDiv.innerHTML = "";

    textArray.forEach((letra, i) => {
        setTimeout(() => (textDiv.innerHTML += letra), 65 * i);
    })

}

typeText(document.querySelector('.type__text'))

donate.addEventListener('click', () => {
    audioClick.play();
    qrCode.classList.remove('qr-hide');
    qrText.classList.remove('qr-hide');
})

rank.addEventListener('click', () => {
    audioClick.play();

    setTimeout(() => {
        window.location = 'pages/rank.html'
    }, 200)

    
})

