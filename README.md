# RankCalculator
Rank calculator based on the number of wins and losses of the player

languages: [pt-BR](#pt-BR) | [en](#en)

<h2 id="pt-BR">pt-BR</h2>

### Como usar

1. Certifique-se de ter o Node instalado com o comando:

```sh
node --version
```

2. Abra o termirnal e clone este repositório onde desejar, com o comando:

```sh
git clone https://github.com/MateusRyu/RankCalculator.git
```

3. Vá para dentro do diretorio deste projeto e execute o seguinte comando:

```sh
node main.js
```

### Instruções do desafio
2️⃣ Calculadora de partidas Rankeadas

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

#### Objetivo

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

- Se vitórias for menor do que 10 = Ferro
- Se vitórias for entre 11 e 20 = Bronze
- Se vitórias for entre 21 e 50 = Prata
- Se vitórias for entre 51 e 80 = Ouro
- Se vitórias for entre 81 e 90 = Diamante
- Se vitórias for entre 91 e 100= Lendário
- Se vitórias for maior ou igual a 101 = Imortal

#### Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

<h2 id="en">en</h2>

### How to use

1. Make sure you have Node installed with the command:

```sh
node --version
```

2. Open the terminal and clone this repository wherever you want, with the command:

```sh
git clone https://github.com/MateusRyu/RankCalculator.git
```

3. Go into this project's directory and run the following command:

```sh
node main.js
```

### Challenge instructions
2️⃣ Ranked Match Calculator

**What should be used**

- Variables
- Operators
- Loops structures
- Decision structures
- Functions

#### Goal

Create a function that receives as a parameter the number of wins and losses of a player,
After that, return the result to a variable, the balance of Ranked must be done through the calculation (wins - losses)

- If wins are less than 10 = Iron
- If wins are between 11 and 20 = Bronze
- If wins are between 21 and 50 = Silver
- If wins are between 51 and 80 = Gold
- If victories are between 81 and 90 = Diamond
- If victories are between 91 and 100 = Legendary
- If wins are greater than or equal to 101 = Immortal

#### Exit

At the end, a message should be displayed:
"The Hero has a balance of **{balanceVictories}** and is at the level of **{level}**"
