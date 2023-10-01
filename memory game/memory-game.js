const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
if(this === firstCard) return;

    this.classList.toggle('flip');

    if(!hasFlippedCard) {
        //first time
        hasFlippedCard = true;
        firstCard = this;
        
    } else {
        secondCard = this

        // do match
        checkMatch();
        
       
        
    }
    
}

function checkMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
    
  } else {
    unflipCards();
    
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
  
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
        
       resetBoard();
    }, 500);

   
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null]
    
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
        
    });
})();








cards.forEach(card => card.addEventListener("click", flipCard));

