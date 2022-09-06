//Initial set up
const card = document.querySelectorAll('.cell')
const front = document.querySelectorAll('.front')
const container = document.querySelector('.container')

shuffleImage()
clicking()
function shuffleImage(){

    card.forEach(c=>{
        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)
        c.style.order = num[random]
    })
}
//Check Cards
function clicking(){
    for(let i = 0; i < card.length; i++){
        front[i].classList.add('show')
        setInterval(() => {
            front[i].classList.remove('show')
        }, 2000);
        card[i].addEventListener('click' ,()=>{
            front[i].classList.add('flip')
           const flippedCard = document.querySelectorAll('.flip')
            if(flippedCard.length == 2){
                container.style.pointerEvents ='none'
                setInterval(() => {
                    container.style.pointerEvents ='all'
                }, 500);
                match(flippedCard[0] , flippedCard[1])
            }
        })
    }
}

//Logic
function match(cardOne , cardTwo){
    if(cardOne.dataset.index == cardTwo.dataset.index){
        cardOne.classList.remove('flip') 
        cardTwo.classList.remove('flip') 
        cardOne.classList.add('match')
        cardTwo.classList.add('match')
    } else{
        setTimeout(() => {
            cardOne.classList.remove('flip') 
            cardTwo.classList.remove('flip') 
        }, 1000);
    }
}