const donate = document.querySelector('.donate__button');
const rank = document.querySelector('.rank__button');
const qrCode = document.querySelector('.qrcode');
const qrText = document.querySelector('.qr-text');

const audioClick = document.querySelector('#mouseClick');
const keyboard = document.querySelector('#keyboard');

audioClick.volume = 0.2;

donate.addEventListener('click', () => {
    audioClick.play();
    qrCode.classList.remove('qr-hide');
    qrText.classList.remove('qr-hide');
})

rank.addEventListener('click', () => {
    audioClick.play();
})