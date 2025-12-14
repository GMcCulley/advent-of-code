let input = require('fs').readFileSync('./input.txt', 'utf-8');

// Parse input into array
input = input.split(',');

let sum = 0;
for (const item of input) {
    const splitItem = item.split('-');
    splitItem[0] = parseInt(splitItem[0]);
    splitItem[1] = parseInt(splitItem[1]);
    for (; splitItem[0] <= splitItem[1]; splitItem[0]++) {
        const halfLength = splitItem[0].toString().length / 2;
        if (halfLength % 1 != 0) continue; // odd numbered length catch

        let leftHalf = splitItem[0].toString().substring(0, halfLength);
        let rightHalf = splitItem[0].toString().substring(halfLength);
        if (leftHalf == rightHalf) sum += splitItem[0];
    }
}

console.log(sum);