const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')

const chars = [
    'baleko',
    'daniel',
    'giao',
    'kaiuu',
    'kinjongpimba',
    'nudege',
    'patriota',
    'tiru',
    'tropa',
    'ualycry',
    'ualyempada',
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

    if (disabledCards.length === 22) {
        setTimeout(() => {
            clearInterval(this.loop);
            alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML} segundos`);
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

    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')

            firstCard = ''
            secondCard = ''
        }, 500)
    }

}

const revealCard = ({ target }) => {
    
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

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

window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
}

