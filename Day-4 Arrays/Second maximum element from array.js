//Second maximum element from array

let arr = [3, 1, 4, 4, 5, 2];

let max = Math.max(arr[0], arr[1]);
let secondMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
        secondMax = arr[i];
    }
}
console.log(secondMax);