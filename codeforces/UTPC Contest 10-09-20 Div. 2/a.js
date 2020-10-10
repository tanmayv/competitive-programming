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
  for (let i = 0; i < cases; i++) {
    test();
  }
}

function test() {
  const input = parseInt(readline());
  const isLeap = input % 400 === 0 || (input % 4 === 0 & input % 100 !== 0);
  console.log(isLeap ? 'February 29': 'March 1');
}