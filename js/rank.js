// Components
const rankBox = document.querySelector('.rank-box');

// Buttons
const returnBtn = document.querySelector('.return__button');

// Audios
const audioClick = document.querySelector('#mouseClick');
audioClick.volume = 0.3

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createPlayerCard = (pos, textName, record) => {

    const playerCard = createElement('div', 'player-card');
    const playerPosition = createElement('div', 'player__position centralize');
    const playerName = createElement('div', 'player__name centralize');
    const playerTime = createElement('div', 'player__time centralize');

    const pPosition = createElement('p', ' ');
    const pName = createElement('p', ' ');
    const pTime = createElement('p', ' ');

    playerCard.appendChild(playerPosition);
    playerCard.appendChild(playerName);
    playerCard.appendChild(playerTime);

    playerPosition.appendChild(pPosition);
    playerName.appendChild(pName);
    playerTime.appendChild(pTime);

    pPosition.innerHTML = `#${pos}`;
    pName.innerHTML = `${textName}`;
    pTime.innerHTML = `${record}s`;

    return playerCard;
}

const loadRank = () => {

    const playerCard = createPlayerCard('1', 'Player', '23');
    rankBox.appendChild(playerCard);

}

returnBtn.addEventListener('click', () => {

    audioClick.play();

    setTimeout(() => {
        window.location = '../index.html'
    }, 200)
})

loadRank();

