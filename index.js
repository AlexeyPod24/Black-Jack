
let isAlive = false;
const hasBlackJack = false;
let message = '';
const startBtn = document.getElementById('start');
const msg = document.getElementById('message')
let sumofCards = document.getElementById('sum');
let cards = document.getElementById('cards');

// Game Logic



startBtn.addEventListener('click', function () {
   const firstCard = Math.floor(Math.random() * 11) + 2;
   const secondCard = Math.floor(Math.random() * 11) + 2;
   let sum = firstCard + secondCard;
   cards.textContent = `Cards: ${firstCard}, ${secondCard}`
   sumofCards.textContent = `Sum: ${sum}`;


   if (sum < 21) {
      msg.textContent = 'Do you want to draw a new card?'
      
   } else if (sum === 21) {
      msg.textContent = "You've got Blackjack!!!!"
      hasBlackJack = true;
    
   } else if (sum > 21) {
      msg.textContent = 'Sorry, you lost!'
      isAlive = false;
   }
   



})


