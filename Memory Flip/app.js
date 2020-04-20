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
      name:'milshake',
      img: 'images/milshake.png'
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
      name:'milshake',
      img: 'images/milshake.png'
    },
    {
      name:'pizza',
      img: 'images/pizza.png'
    }
  ]

  const grid = document.querySelector('.grid');

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
    alert('check')
  }

  createBoard()
})
