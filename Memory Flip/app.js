document.addEventListener("DOMContentLoaded", ()=> {

  const cards = [
    {
      name:'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name:'fries',
      img: 'images/fries.png'
    },
    {
      name:'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name:'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name:'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name:'pizza',
      img: 'images/pizza.png'
    },
    {
      name:'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name:'fries',
      img: 'images/fries.png'
    },
    {
      name:'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name:'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name:'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name:'pizza',
      img: 'images/pizza.png'
    }
  ]
cards.sort(() => 0.5 - Math.random())
  const grid = document.querySelector('.grid');
  var cardChosen = []
  var cardChosenId = []
  var cardsWon = []
  const resultDisplay = document.querySelector('#result')

  function createBoard(){
    for(let i=0; i<cards.length; i++){
      var card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipcard)
      grid.appendChild(card);
    }
  }
  function flipcard(){
    var cardId = this.getAttribute('data-id')
    cardChosen.push(cards[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cards[cardId].img)
    if(cardChosen.length===2){
      setTimeout(checkForMatch, 500)
    }
  }
  function checkForMatch(){
    var allCards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    if(cardChosen[0] === cardChosen[1]){
      allCards[optionOneId].setAttribute('src', 'images/white.png')
      allCards[optionTwoId].setAttribute('src', 'images/white.png')
      cardsWon.push(cardChosen)
    }else{
      allCards[optionOneId].setAttribute('src', 'images/blank.png')
      allCards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    cardChosen=[]
    cardChosenId=[]
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cards.length/2){
      resultDisplay.textContent = "Congratulations! You found them all"
    }
  }

  createBoard()
})
