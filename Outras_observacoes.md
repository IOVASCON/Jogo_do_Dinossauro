# Outras Observações

- Outras orientações a respeito das dificuldades e procesimentos executados durante o desenvolvimento desse projeto.

## Script de Criação da Estrutura do Projeto

Para executar o script criando_estrutura.sh, siga as orientações abaixo:

1. **Salve o Script:** Certifique-se de salvar o conteúdo fornecido em um arquivo com o nome criando_estrutura.sh. Para isso:
    - Crie o arquivo: nano criando_estrutura.sh ou qualquer editor de texto.
    - Cole o conteúdo fornecido e salve.

2. **Conceda Permissão de Execução:** No terminal, conceda permissão ao script para que ele possa ser executado:

    chmod +x criando_estrutura.sh

3. **Execute o Script:** Execute o script no terminal para criar a estrutura do projeto:

    ./criando_estrutura.sh

4. **Verifique a Estrutura Criada:** Após a execução, você terá uma pasta chamada dinossauro-jogo com a seguinte estrutura:

    dinossauro-jogo/
    ├── assets/
    ├── css/
    │   └── style.css
    ├── img_dev/
    ├── js/
    │   └── script.js
    ├── index.html
    ├── README.md
    ├── .gitignore
    └── Outras_observacoes.md

5. **Próximos Passos:**

- Navegue até a pasta do projeto: cd dinossauro-jogo
- Edite os arquivos conforme necessário para iniciar o desenvolvimento do jogo.

## Estrutura dos Arquivos

Arquivos do projeto:

1. **HTML** - Configurado o esqueleto básico do jogo com as classes e links necessários.
2. **CSS** - Estilização inicial do jogo com animação do background e estilo do dinossauro.
3. **JavaScript** - Lógica principal do jogo, incluindo o movimento do dinossauro, cactos e pontuação.

## Fontes de Imagens Sprites Prontos

Pesquise por palavras-chave como "dinosaur sprite," "cactus sprite," "desert background."

1. **Sprites Prontos (Ideal para Jogos):** Visite sites como:

- **Kenney Assets** (biblioteca gratuita para jogos).
- **OpenGameArt** (muitas opções gratuitas para sprites).

## Instruções para as Pastas Sprites

1. Crie as subpastas dentro de assets conforme a estrutura proposta.

2. Salve os sprites correspondentes em suas respectivas pastas:
    - **Dinossauro:** Todos os sprites do dinossauro vão para assets/dino/.
    - **Cactos:** Todos os sprites dos cactos vão para assets/cactus/.
    - **Background:** Adicione o arquivo de fundo na pasta assets/background/.

## Arquivo index.html

    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
    <!-- Configurações básicas do documento HTML -->
    <meta charset="UTF-8"> <!-- Define o conjunto de caracteres como UTF-8 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Ajusta o layout para dispositivos móveis -->
    <title>Jogo Dino Reimaginado</title> <!-- Título da página -->
    
    <!-- Link para o arquivo de estilo CSS -->
    <link rel="stylesheet" href="css/style.css">

    <!-- Link para o arquivo de script JavaScript -->
    <script src="js/script.js" defer></script> <!-- "defer" garante que o script será carregado após o HTML -->
    </head>
    <body>
    <!-- Título do jogo -->
    <h1 class="game-title">Jogo Dino Reimaginado</h1> <!-- Exibe o nome do jogo centralizado no topo -->

    <!-- Container principal do jogo -->
    <div class="game-container">
        <div class="dino"></div> <!-- Representa o dinossauro -->
        <div class="background"></div> <!-- Representa o fundo do jogo -->
    </div>

    <!-- Exibição da pontuação -->
    <div class="score-board">
        Pontuação: <span id="score">0</span> <!-- Exibe a pontuação inicial como 0 -->
    </div>

    <!-- Botão para iniciar o jogo -->
    <button class="start-btn">Iniciar Jogo</button> <!-- Botão que inicia o jogo -->

    <!-- Quadro com orientações do jogo -->
    <div class="game-rules">
        <h2>Orientações do Jogo</h2> <!-- Título do quadro -->
        <ul>
        <!-- Lista com as instruções para jogar -->
        <li>Pressione a tecla <b>Espaço</b> para fazer o Dino pular.</li>
        <li>Evite colidir com os cactos que vêm da direita para a esquerda.</li>
        <li>A cada cacto evitado, sua pontuação aumenta.</li>
        <li>Se o Dino colidir com um cacto, o jogo termina.</li>
        <li>Pressione o botão "Iniciar Jogo" para começar ou reiniciar o jogo.</li>
        </ul>
    </div>
    </body>
    </html>

### Explicações

1. **Estrutura básica:**

    O documento HTML está estruturado com head (configurações e links externos) e body (conteúdo visível).

2. **Cabeçalho do jogo:**

        <h1> com a classe game-title exibe o nome do jogo centralizado na tela.

3. **Container principal (game-container):**

    Contém os elementos principais do jogo: o dinossauro (.dino) e o fundo (.background).

4. **Pontuação:**

    A div com a classe score-board exibe a pontuação atual do jogador.

5. **Botão de início:**

    Um botão estilizado com a classe start-btn permite iniciar ou reiniciar o jogo.

6. **Quadro de orientações:**

    A div com a classe game-rules apresenta as regras do jogo para o jogador, com instruções claras.
