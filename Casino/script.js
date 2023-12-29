const prompt = require("prompt-sync")();

//Its a practice of all constant  gloabl variables are declared CAPITAL
const ROWS = 3;
const COLS = 3;

//Symbols
const VARIABLE_COUNT = {
  A: 3,
  B: 5,
  C: 7,
  D: 10,
};

//Symbols Value i.e. if "A" occours the amount will be multiplied by 5 and "B comes" amount will be multyplied by 4.
const VARIABLE_VALUE = {
  A: 6,
  B: 4,
  C: 3,
  D: 2,
};

// Taking deposit amount from user to play
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter deposit amount: "); //deposit amount will be in string
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Inavalid deposit amount , TRY AGAIN !");
    } else {
      return numberDepositAmount;
    }
  }
};

//Taking number of lines to bet on
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter number of lines to bet on(1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Inavalid number of lines!");
    } else {
      return numberOfLines;
    }
  }
};

//Checking if the balance and the bet amount per line fullfil the rwquirements
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per lines: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Inavalid bet , TRY AGAIN!");
    } else {
      return numberBet;
    }
  }
};

const spin = () => {
  //In thid function we have generated elements from availabe VARIABLE_COUNT arrays
  const symbols = []; // this will store the elements there in VARIABLE_COUNT
  for (const [symbol, count] of Object.entries(VARIABLE_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
  // console.log(symbols);

  const reel = [];
  for (let i = 0; i < COLS; i++) {
    reel.push([]);
    const reelSymbols = [...symbols]; //This will copy the symbol there in symbols array from line no.72 to line no.83
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reel[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reel;
};


// Converting the reel function  output 
// [ [ 'B', 'D', 'C' ], [ 'B', 'D', 'D' ], [ 'B', 'A', 'D' ] ]
// to
// [ [ 'B', 'B', 'B' ], [ 'D', 'D', 'A' ], [ 'C', 'D', 'D' ] ]


const transpose = (reels) => {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

// Converting from this 
//[ [ 'B', 'B', 'B' ], [ 'D', 'D', 'A' ], [ 'C', 'D', 'D' ] ]

// to this
//                B | B | B
//                D | D | A
//                C | D | D


const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i,symbol] of row.entries()) {
            rowString += symbol;
            if (i != row.length - 1) {
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
};



const balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reel = spin();
console.log(reel);
const row = transpose(reel);
console.log(row);
const rows = printRows(row);
console.log(rows);


