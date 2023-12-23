const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const red = '\x1b[31m%s\x1b[0m';

const prompt = function(message, callback) {
  readline.question(message, answer => {
    callback(answer);
  });
}

function warning(message) {
  console.error(red, message);
}

function getData(filepath, stack) {
  const callback = stack.shift();
  fs.readFile(filepath, 'utf8', (error, data) => {
    if (error) {
      warning('Erro ao ler o arquivo: ');
      warning(error);
      process.exit(1);
    }

    try {
     callback(JSON.parse(data), stack);
    } catch (error) {
      warning('Erro ao analisar o JSON: ');
      warning(error);
      process.exit(1);
    }
  })
}

function getWins(levels, stack) {
  const callback = stack.shift();
  const data = {
    lastState: levels,
    levels: levels,
    validate: { 
      callback: getWins, 
    }
  };
  prompt('Vitórias: ', (wins) => {
    data.wins = wins;
    data.validate.value = wins;
    callback(data, stack);
  });
}

function validateIntegerPositive(data, stack) {
  const value = data.validate.value;
  if (Number.isInteger(parseInt(value, 10)) && value >= 0) {
    const callback = stack.shift();
    callback(data, stack);
  } else {
    warning("Valor inválido!\n A quantidade de Vitórias precisa ser um número inteiro e positivo. Informe novamente...");
    data = data.validate.callback(data.lastState, [validateIntegerPositive, ...stack]);
  }
}

function getLosses(data, stack) {
  const callback = stack.shift();
  const lastState = data;
  prompt('Derrotas: ', (losses) => {
    data['lastState'] = lastState;
    data['validate'] = {value: losses, callback: getLosses};
    data['losses'] = losses;
    callback(data, stack);
  })
}

function calculateRank(data, stack) {
  const callback = stack.shift();
  const balanceVictories = data.wins - data.losses;
  const lowerLevel = data.levels.shift();
  let level = lowerLevel.name;
  for (let i = 0, length = data.levels.length; i < length; i++) {
    if (balanceVictories >= data.levels[i].min) {
      level = data.levels[i].name;
    }
  }
  callback({balanceVictories, level}, stack);
}

function printOutput(data, stack) {
  const callback = stack.shift();
  console.log(`O Herói tem de saldo de ${data.balanceVictories} está no nível de ${data.level}`);
  callback(true, stack);
}

const stack = [
  getWins,
  validateIntegerPositive,
  getLosses,
  validateIntegerPositive,
  calculateRank,
  printOutput,
  (x, y) => {readline.close()}
];

getData('levels.json', stack);
