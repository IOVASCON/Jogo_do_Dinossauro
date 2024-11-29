// Seleciona o elemento do dinossauro no DOM
const dino = document.querySelector('.dino');

// Seleciona o elemento do fundo no DOM
const background = document.querySelector('.background');

// Seleciona o botão "Iniciar Jogo" no DOM
const startButton = document.querySelector('.start-btn');

// Seleciona o elemento que exibe a pontuação no DOM
const scoreDisplay = document.querySelector('#score');

// Declaração de variáveis para controlar o estado do jogo
let isJumping = false; // Indica se o dinossauro está pulando
let isGameOver = false; // Indica se o jogo terminou
let position = 0; // Posição vertical do dinossauro
let score = 0; // Pontuação do jogador
let gameStarted = false; // Indica se o jogo já foi iniciado

// Função para iniciar o jogo
function startGame() {
  if (gameStarted) return; // Impede que o jogo seja iniciado novamente se já estiver em andamento
  gameStarted = true; // Marca o jogo como iniciado
  isGameOver = false; // Reseta o estado de fim de jogo
  score = 0; // Reseta a pontuação
  scoreDisplay.innerText = score; // Atualiza a pontuação exibida para 0
  createCactus(); // Inicia a criação dos cactos
}

// Função que detecta a tecla de espaço para o pulo
function handleKeyUp(event) {
  if (event.keyCode === 32) { // Verifica se a tecla pressionada é a barra de espaço
    if (!isJumping && gameStarted && !isGameOver) { // Só pula se o jogo estiver em andamento e não for game over
      jump(); // Chama a função de pular
    }
  }
}

// Função que controla o pulo do dinossauro
function jump() {
  isJumping = true; // Marca que o dinossauro está pulando

  // Controla a subida do pulo
  let upInterval = setInterval(() => {
    if (position >= 150) { // Quando atingir a altura máxima
      clearInterval(upInterval); // Para a subida

      // Controla a descida
      let downInterval = setInterval(() => {
        if (position <= 0) { // Quando atingir o chão
          clearInterval(downInterval); // Para a descida
          isJumping = false; // Marca que o pulo terminou
        } else {
          position -= 10; // Reduz a posição vertical (descendo mais devagar)
          dino.style.bottom = position + 'px'; // Atualiza a posição do dinossauro
        }
      }, 30);
    } else {
      position += 20; // Aumenta a posição vertical (subindo)
      dino.style.bottom = position + 'px'; // Atualiza a posição do dinossauro
    }
  }, 20);
}

// Função que cria os cactos
function createCactus() {
  const cactus = document.createElement('div'); // Cria um elemento div para o cacto
  let cactusPosition = 1000; // Define a posição inicial do cacto (fora da tela)
  let randomTime = Math.random() * 3000 + 2000; // Define um tempo aleatório para criar o próximo cacto

  if (isGameOver) return; // Se o jogo acabou, não cria mais cactos

  cactus.classList.add('cactus'); // Adiciona a classe 'cactus' ao elemento
  cactus.style.backgroundImage = "url('./assets/cactus/cactus1.png')"; // Define a imagem do cacto
  cactus.style.left = `${cactusPosition}px`; // Define a posição inicial à direita
  background.appendChild(cactus); // Adiciona o cacto ao fundo

  // Anima o movimento do cacto para a esquerda
  let leftTimer = setInterval(() => {
    if (cactusPosition < -60) { // Quando o cacto sair da tela
      clearInterval(leftTimer); // Para o movimento
      background.removeChild(cactus); // Remove o cacto do DOM
      score++; // Incrementa a pontuação
      scoreDisplay.innerText = score; // Atualiza a pontuação exibida
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      // Verifica colisão com o dinossauro
      clearInterval(leftTimer); // Para o movimento do cacto
      isGameOver = true; // Marca como fim de jogo
      document.body.innerHTML = `
        <h1 class="game-over">Fim de jogo</h1>
        <button class="restart-btn" onclick="location.reload()">Reiniciar</button>
      `; // Exibe a mensagem de fim de jogo e botão de reinício
    } else {
      cactusPosition -= 5; // Move o cacto para a esquerda (velocidade reduzida)
      cactus.style.left = `${cactusPosition}px`; // Atualiza a posição do cacto
    }
  }, 20);

  setTimeout(createCactus, randomTime); // Agenda a criação do próximo cacto
}

// Adiciona eventos para iniciar o jogo e detectar a tecla de espaço
startButton.addEventListener('click', startGame); // Inicia o jogo ao clicar no botão
document.addEventListener('keyup', handleKeyUp); // Detecta a tecla de espaço
