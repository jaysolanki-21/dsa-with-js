// Array Right- Rotation by k element
const prompt = require('prompt-sync')();

function rightRotate(arr, k) {
    k = k % arr.length;
    for (let j = 0; j < k; j++) {
        let copy = arr[arr.length - 1];
        for (let i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = copy;
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log("Original Array:", arr);
let k = Number(prompt("Enter the number of rotations (k): "));
let rotated = rightRotate(arr, k);
console.log("Rotated Array:", rotated);
