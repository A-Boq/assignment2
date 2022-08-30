//Initial set up
const section = document.querySelector('section');

//Generate the data
const getData = () => [
{ imgSrc: './images/001.png', name:'001' },
{ imgSrc: './images/002.png', name:'002' },
{ imgSrc: './images/003.png', name:'003' },
{ imgSrc: './images/004.png', name:'004' },
{ imgSrc: './images/005.png', name:'005' },
{ imgSrc: './images/006.png', name:'006' },
{ imgSrc: './images/007.png', name:'007' },
{ imgSrc: './images/008.png', name:'008' },
{ imgSrc: './images/001.png', name:'001' },
{ imgSrc: './images/002.png', name:'002' },
{ imgSrc: './images/003.png', name:'003' },
{ imgSrc: './images/004.png', name:'004' },
{ imgSrc: './images/005.png', name:'005' },
{ imgSrc: './images/006.png', name:'006' },
{ imgSrc: './images/007.png', name:'007' },
{ imgSrc: './images/008.png', name:'008' },
];

//Randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5 );
    return cardData;
};

//Card generator function
const cardGenerator = () => {
    const cardData = randomize();
//Generate HTML
cardData.forEach((item, index) => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';
    //Attach info to cards
    face.src = item.imgSrc;
    card.setAttribute('name', item.name);
    //Attach cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', (e) => {
        card.classList.toggle('toggleCard');
        checkCards(e);
    });
});
};
//Check Cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    console.log(flippedCards);
    //Logic
    if (flippedCards.length === 2) {
        if (
            flippedCards[0].getAttribute('name') === 
            flippedCards[1].getAttribute('name')
            ) {
        console.log('match');
        flippedCards.forEach((card) => {
        card.classList.remove('flipped');
        card.style.pointerEvents = 'none';
        });
        } else {
            console.log('wrong');
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            });
        }
    }
}

cardGenerator();