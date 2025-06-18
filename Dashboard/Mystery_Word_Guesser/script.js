import words from './words.js'

const reset = document.getElementById('resetGame')
const input = document.getElementById('questionInput')
const hint = document.getElementById('hint')
const submit = document.getElementById('submitBtn')
const response = document.getElementById('responseArea')
const wordlength = document.getElementById('wordlength')
const guesscount = document.getElementById('guessCount')

// Pick a random word
const word = words[Math.floor(Math.random() * words.length)]
hint.textContent = 'Hint: ' + word.hint
console.log("WORD:", word.word)

wordlength.textContent = word.word.length

const maxGuesses = 6
let currentRow = 0

// Create 6xN empty grid
for (let i = 0; i < maxGuesses; i++) {
  const row = document.createElement('div')
  row.className = 'response-row'
  for (let j = 0; j < word.word.length; j++) {
    const box = document.createElement('div')
    box.className = 'letter-box'
    row.appendChild(box)
  }
  response.appendChild(row)
}

// Handle Reset
reset.addEventListener('click', () => {
  window.location.reload()
})

// Handle Submit
submit.addEventListener('click', () => {
  const guess = input.value.toLowerCase()
  const actual = word.word

  if (currentRow >= maxGuesses) return

  const row = response.children[currentRow]
  const boxes = row.children

  for (let i = 0; i < 6; i++) {
    const letter = guess[i] || ""  // Fill blank if too short
    const box = boxes[i]
    box.textContent = letter.toUpperCase()

    if (letter === actual[i]) {
      box.style.backgroundColor = "green"
      box.style.color = "white"
    } else if (letter && actual.includes(letter)) {
      box.style.backgroundColor = "gold"
      box.style.color = "black"
    } else if (letter) {
      box.style.backgroundColor = "gray"
      box.style.color = "white"
    } else {
      box.style.backgroundColor = "#e0e0e0" // Neutral gray for blanks
      box.style.color = "#999"
    }
  }

  currentRow++
  guesscount.textContent = maxGuesses - currentRow
  input.value = ""

  // Game Over
  if (currentRow === maxGuesses) {
    const msg = document.createElement('p')
    msg.textContent = "💀 Game Over! The word was: " + actual.toUpperCase()
    msg.style.fontWeight = 'bold'
    msg.style.color = 'red'
    msg.style.marginTop = '10px'
    response.appendChild(msg)
    input.disabled = true
    submit.disabled = true
  }


  if (guess===word.word)
  {
      const msg = document.createElement('p')
    msg.textContent = "Yayy!! You won! The Word was: " + actual.toUpperCase()
    msg.style.fontWeight = 'bold'
    msg.style.color = 'Green'
    msg.style.marginTop = '10px'
    response.appendChild(msg)
    input.disabled = true
    submit.disabled = true
  }
})
