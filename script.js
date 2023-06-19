const startBtn = document.querySelector('.startButton'),
   startBlock = document.querySelector('.before__game'),
   chooseLevelBtns = document.querySelectorAll('.chooseLevel button'),
   cardsBlock = document.querySelector('.cards'),
   game = document.querySelector('.game'),
   img = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10']
let cards = 0

startBtn.addEventListener('click', () => {
   startBlock.classList.add('active__choose__level')
})
chooseLevelBtns.forEach((btn) => {
   btn.addEventListener('click', () => {
      game.classList.add('active__choose__level')
      setTimeout(() => {
         startBlock.remove()
         changeCardsNum(btn.textContent)
      }, 1000)
   })
})
const changeCardsNum = (btnContent) => {
   if (btnContent === 'Просто') {
      cards = 10
      makeCards(cards)
      return
   }
   if (btnContent === 'Средне') {
      cards = 16
      makeCards(cards)
      return
   }
   if (btnContent === 'Сложно') {
      cards = 24
      makeCards(cards)
      return
   }
}
const makeCards = (num) => {
   for (let i = 0; i < num; i++) {
      const card = document.createElement('img'),
         figure = document.createElement('figure'),
         figcaption = document.createElement('figcaption'),
         cardFigure = document.createElement('div')

      cardFigure.classList.add('card__figure')
      cardFigure.appendChild(card)
      cardFigure.appendChild(figcaption)

      card.src = `./img/${img[Math.floor(Math.random() * img.length)]}.jpg`

      card.classList.add('card-face')
      card.classList.add('card')
      figcaption.classList.add('card-face')
      figcaption.classList.add('figcaption')
      figure.classList.add('figure')

      card.addEventListener('click', () => {
         card.classList.toggle('card__active')
         figcaption.classList.toggle('card-face__back')
      })
      figure.appendChild(cardFigure)
      if (num === 10) {
         cardsBlock.classList.add('cards__active')
         cardsBlock.appendChild(figure)
      } else if (num === 16) {
         cardsBlock.classList.add('cards__active2')
         cardsBlock.appendChild(card)
      } else if (num === 24) {
         cardsBlock.classList.add('cards__active3')
         cardsBlock.appendChild(card)
      }
   }
}
