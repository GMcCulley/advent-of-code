let input = require('fs').readFileSync('./input.txt', 'utf-8');

// Parse input into array without line endings
input = input.replaceAll('\r', '').split('\n');

let zeroSum = 0;
let num = 50;

for (let item of input) {
    const direction = item[0];
    let rotations = item.substring(1);

    while (rotations > 0) {
        num += direction == 'R' ? 1 : -1;
        if (num < 0) num = 99;
        if (num > 99) num = 0;
        rotations--;
        if (num == 0) {
            zeroSum++;
        }
    }
}

console.log(zeroSum);