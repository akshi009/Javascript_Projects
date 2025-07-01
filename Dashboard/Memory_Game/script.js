  let currentlvl = 1;
    let lives = 3;
    const levelscreen = document.getElementById("level-screen");
    const levelinstructions = document.getElementById("level-instructions");
    const startbutton = document.getElementById("start-button");
    const levelnumber = document.getElementById("level-number");
    const gamearea = document.getElementById("game-area");
    const nextlevel = document.getElementById("next-level");
    const nextbutton = document.getElementById("next-button");
    const livesdisplay = document.getElementById("lives-display");
    const gameover = document.getElementById("game-over");
    const finallevel = document.getElementById("final-level");
    const restartbutton = document.getElementById("restart-button");
    const remainingtiles = document.getElementById("remaining-tiles");

    let correctClicks = 0;
    let wrongClicks = 0;
    let cards = [];
    let targetIndexes = [];
    let gameActive = false;

    function updateLivesDisplay() {
      const hearts = "❤️".repeat(lives) + "💔".repeat(3 - lives);
      livesdisplay.textContent = `Lives: ${hearts}`;

    }

    function updateRemainingTiles() {
      const remaining = targetIndexes.length - correctClicks;
      remainingtiles.textContent = `Remaining: ${remaining}`;
      if (remaining <= 0) {
        remainingtiles.style.display = "none";
      }
    }

    function getGridClass(cardCount) {
      if (cardCount <= 9) return "grid-3x3";
      if (cardCount <= 12) return "grid-4x3";
      if (cardCount <= 16) return "grid-4x4";
      if (cardCount <= 20) return "grid-5x4";
      if (cardCount <= 25) return "grid-5x5";
      if (cardCount <= 30) return "grid-6x5";
      if (cardCount <= 36) return "grid-6x6";
      return "grid-7x6";
    }

    nextbutton.addEventListener("click", () => {
      currentlvl++;
      levelnumber.textContent = currentlvl;
      nextlevel.style.display = "none";
      startLevel();
    });

    startbutton.addEventListener("click", () => {
      startLevel();
    });

    restartbutton.addEventListener("click", () => {
      currentlvl = 1;
      lives = 3;
      levelnumber.textContent = currentlvl;
      updateLivesDisplay();
      gameover.style.display = "none";
      remainingtiles.style.display = "none";
      startbutton.style.display = "inline-block";
      levelinstructions.textContent = "Click 'Start' to begin the Memory Game!";
    });

    function startLevel() {
      gamearea.innerHTML = "";
      gameActive = true;
      wrongClicks = 0;
      
      const totalTime = 3;
      let countdown = totalTime;

      levelinstructions.textContent = `Memorize the tiles! Time left: ${countdown}s`;
      startbutton.style.display = "none";

      // Calculate grid size and targets based on level
      const cardCount = 9 + ((currentlvl - 1) * 3);
      const targetCount = 3* currentlvl;
      
      cards = generateCards(cardCount);
      gamearea.className = getGridClass(cardCount);

      targetIndexes = getRandomIndexes(targetCount, cards.length);
      targetIndexes.forEach((index) => cards[index].classList.add("highlight"));

      const countdownInterval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
          levelinstructions.textContent = `Memorize the tiles! Time left: ${countdown}s`;


        } else {
          clearInterval(countdownInterval);
          levelinstructions.textContent = `Now click the ${targetCount} highlighted tiles!`;
          remainingtiles.style.display = "block";
          targetIndexes.forEach((index) => cards[index].classList.remove("highlight"));
          enableClicks(targetIndexes);
        }
      }, 1000);
    }

    function generateCards(count) {
      let arr = [];
      for (let i = 0; i < count; i++) {
        const card = document.createElement("div");
        card.className = "card";
        gamearea.appendChild(card);
        arr.push(card);
      }
      return arr;
    }

    function getRandomIndexes(num, max) {
      const indexes = [];
      while (indexes.length < num) {
        let idx = Math.floor(Math.random() * max);
        if (!indexes.includes(idx)) indexes.push(idx);
      }
      return indexes;
    }

    function enableClicks(correctIndexes) {
      correctClicks = 0;
      
      cards.forEach((card, index) => {
        card.addEventListener("click", handleCardClick);
        
        function handleCardClick() {
          if (!gameActive || card.classList.contains("correct") || card.classList.contains("wrong")) {
            return;
          }

          if (correctIndexes.includes(index)) {
            card.classList.add("correct");
            correctClicks++;
            updateRemainingTiles();
            
            if (correctClicks === correctIndexes.length) {
              gameActive = false;
              levelinstructions.textContent = "Perfect! Level completed!";
              setTimeout(() => {
                nextlevel.style.display = "block";
              }, 1000);
            }
          } else {
            card.classList.add("wrong");
            wrongClicks++;
            lives--;
            updateLivesDisplay();
            
            if (lives <= 0) {
              gameActive = false;
              levelinstructions.textContent = "Game Over! You ran out of lives.";
              finallevel.textContent = currentlvl;
              setTimeout(() => {
                gameover.style.display = "block";
              }, 1500);
            } else {
              levelinstructions.textContent = `Wrong tile! ${lives} lives remaining. Keep trying!`;
            }
          }
        }
      });
    }

    updateLivesDisplay();