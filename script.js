//Initial set up
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 6;

//Link text
playerLivesCount.textContent = playerLives;

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
cardData.forEach((item) => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';
    //Attach info to cards
    face.src = item.imgSrc;
    //Attach cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
});
};

cardGenerator();