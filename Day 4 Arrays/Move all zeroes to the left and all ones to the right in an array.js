//Move all zeroes to the left and all ones to the right in an array

let arr = [0, 1, 1, 0, 1, 0, 1, 1, 0, 1];
let i = 0;
let j = 1;

while(j<arr.length){
    if(arr[j]==0){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i++
    }
    j++
}

console.log(arr);