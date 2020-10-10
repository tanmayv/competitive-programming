'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();

function main() {
  const cost = {
    'bronze': 1, 'silver': 2, 'gold': 4
  };
  const coins = {
    1 : 0,
    2: 0,
    4: 0
  }
  let valid = true;
  const cases = parseInt(readline());
  for (let i = 0; i < cases; i++) {
    const coin = cost[readline()];
    coins[coin] += 1;
    let change = coin - 1;
    // console.log('required change', change);    
    while (change > 1 && coins[2] > 0) {
      change -= 2;
      coins[2] -= 1;
      // console.log('returning silver');
    }

    while (change > 0 && coins[1] > 0) {
      change -= 1;
      coins[1] -= 1;
      // console.log('returning bronze');
    }
    // console.log('change value ', change);
    valid = change === 0;

    if (!valid) break;
  }

  console.log(valid ? 'YES': 'NO');
}
