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
  const peoples = [];
  const positives = [];
  let a = [];
  let max = 0;
  let maxIndex = 0;
  for (let i = -1; i < cases; i++) {
    if (i === -1) {
      a = readline().split(' ').map(s => parseInt(s));
    } else {
      const b = readline().split(' ').map(s => parseInt(s));
      const c = Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);
      if (c > max) {
        max = c;
        maxIndex = i;
      }
      peoples.push([...b])
    }
  }

  console.log(Math.sqrt(Math.pow(peoples[maxIndex][0] - a[0],2) + Math.pow(peoples[maxIndex][1] - a[1],2)));

}
