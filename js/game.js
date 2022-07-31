const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')

// Win Box
const winnerPlayer = document.querySelector('.winner')
const winTime = document.querySelector('.winTimer')
const winBox = document.querySelector('.win-box')
const resetBtn = document.querySelector('.reset__button')

// Sounds
const clickFlip = document.querySelector('#clickFlip')
const unFlip = document.querySelector('#unFlip')
const point = document.querySelector('#point')
const audioClick = document.querySelector('#mouseClick');
audioClick.volume = 0.3

const chars = [
    'baleko',
    'daniel',
    'kaiuu',
    'kinjongpimba',
    'nudege',
    'patriota',
    'tiru',
    'tropa',
    'ualycry',
    'ualyempada',
    'john',
    'homem',
    'milos',
    'homer',
    'seje',
    'sabor',
    'tirumine',
    'macacog',
];

const createElement = (tag, className) => {

    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {

    const disabledCards = document.querySelectorAll('.disabled-card')

    if (disabledCards.length === 36) {
        setTimeout(() => {
            clearInterval(this.loop);
            winnerPlayer.innerHTML = localStorage.getItem('player');
            winTime.innerHTML = timer.innerHTML;

            winBox.classList.remove('hide')
        }, 150)
    }
}

const checkCards = () => {

    const firstChar = firstCard.getAttribute('data-char')
    const secondChar = secondCard.getAttribute('data-char')

    if (firstChar === secondChar) {

        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')
        
        firstCard = ''
        secondCard = ''

        checkEndGame();

        setTimeout(() => {
            point.play()
        }, 350)

    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')

            firstCard = ''
            secondCard = ''

            unFlip.play()
        }, 500)
    }

}

const revealCard = ({ target }) => {

    // Fix Grid flip bug
    if (!target.parentNode.className.includes('card')) {
        return;
    }
    
    // Check if card is already reveal
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    // Logic
    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
        clickFlip.cloneNode(true).play()
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;
        clickFlip.cloneNode(true).play()

        checkCards();

    } else {
        return;
    }
}

const createCard = (char) => {
    
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../images/cards/${char}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-char', char)

    return card;
}

const loadGame = () => {

    const duplicateChar = [ ...chars, ...chars ];
    const shuffedArray = duplicateChar.sort( () => Math.random() - 0.5 );

    duplicateChar.forEach((char) => {

        const card = createCard(char);
        grid.appendChild(card);
    })

}

const startTimer = () => {

    this.loop = setInterval(() => {
        // + -> Tentar converter para número diretamente.
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    }, 1000)
}

const showCards = () => {

    const allCards = document.querySelectorAll('.card')

    allCards.forEach((carde) => {
        carde.classList.add('reveal-card');
    })


    setTimeout(() => {

        allCards.forEach((carde) => {
            carde.classList.remove('reveal-card')
        })
        
    }, 1000)  

}

window.onload = () => {

    spanPlayer.innerText = localStorage.getItem('player');
    loadGame();
    showCards();
    startTimer();
}

resetBtn.addEventListener('click', () => {

    audioClick.play()

    setTimeout(() => {
        location.reload();
    }, 200)
})

