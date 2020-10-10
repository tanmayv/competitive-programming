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
  const cases = parseInt(readline());
  let max  = 0;
  let result = '';
  const x = Date.parse('Jul 7, 1928');
  for (let i = 0; i < cases; i++) {
    const a = readline();
    const date = readline();
    const b = parseFloat(readline())
    if(Date.parse(date, 'MMM DD, YYYY') > x) {
      if (max < b) {
        max = b
        result = a;
      }
    }
  }
  console.log(result);
}
