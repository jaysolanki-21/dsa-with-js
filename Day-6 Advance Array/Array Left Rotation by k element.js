// Array Left- Rotation by k element
const prompt = require('prompt-sync')();
function leftRotate(arr, k) {
    k = k % arr.length;
    for (let j = 0; j < k; j++) {
        let copy = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = copy;
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(arr);
let k = Number(prompt("Enter K value: "));
let rotated = leftRotate(arr, k);
console.log(rotated);
